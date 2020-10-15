import * as BestPrograms from "./types/best_programs";

import { promises as fs } from "fs";
import * as path from "path";
import { performance } from "perf_hooks";

import * as render from "./render";
import { getAllJSDocTags } from "typescript";


/** Input file path to data file */
const inputBestProgramsFilePath = path.join(__dirname, "best_programs.json");

/** Input file path to README file */
const inputOutputBestProgramsReadmeFilePath = path.join(__dirname, "README.md");

/** Input file README indicators for location of best programs section */
const readmeBestProgramsIndicators = {
    begin: `[//]: # (Best Programs begin)`,
    end: `[//]: # (Best Programs end)`
};

/** Sort JSON object keys */
const sortObject = <T>(unsorted: T): T => {
    const sorted = {};
    Object.keys(unsorted).sort().forEach(key => {
      sorted[key] = unsorted[key];
    });
    return sorted as T;
}

(async (): Promise<void> => {

    // Load input files
    const data = JSON.parse(await fs.readFile(inputBestProgramsFilePath, "utf8")) as BestPrograms.BestPrograms;
    const readmeContent = await fs.readFile(inputOutputBestProgramsReadmeFilePath, "utf8");

    // Extract readme content before and after indicators
    const readmeContentSplitAtIndicatorBegin = readmeContent.split(readmeBestProgramsIndicators.begin)
    if (readmeContentSplitAtIndicatorBegin.length !== 2) {
        throw Error(`${inputOutputBestProgramsReadmeFilePath} content split at '${readmeBestProgramsIndicators.begin}' didn't match or more than once`)
    }
    const readmeContentBeforeSection = readmeContentSplitAtIndicatorBegin[0]
    const readmeContentSplitAtIndicatorEnd = readmeContentSplitAtIndicatorBegin[1].split(readmeBestProgramsIndicators.end)
    if (readmeContentSplitAtIndicatorEnd.length !== 2) {
        throw Error(`${inputOutputBestProgramsReadmeFilePath} content split at '${readmeBestProgramsIndicators.end}' didn't match or more than once`)
    }
    const readmeContentAfterSection = readmeContentSplitAtIndicatorEnd[1]

    // Create best programs list based on input data
    const bestProgramsContent = render.renderBestProgramsSection(data);

    // Write table to local file
    await fs.writeFile(inputOutputBestProgramsReadmeFilePath, readmeContentBeforeSection + readmeBestProgramsIndicators.begin + "\n" + bestProgramsContent + "\n" + "\n" + readmeBestProgramsIndicators.end + readmeContentAfterSection);
    console.info(`README was updated in ${performance.now()} ms using ${inputBestProgramsFilePath}`);

    // If enabled it also reorders the best programs JSON file
    const orderBestProgramsJsonFile = true;
    if (orderBestProgramsJsonFile) {
        const newData: BestPrograms.BestPrograms = { ...data };
        newData.programs = data.programs.sort((a, b) => {
            if (a.category < b.category) {
                return -1;
            } else if (a.category > b.category) {
                return 1;
            } else {
                if (a.name < b.name) {
                    return -1;
                }
                return a.name > b.name ? 1 : 0;
            }
        }).map(unordered => {
            if (unordered.tags) {
                unordered.tags = unordered.tags.sort();
            }
            return sortObject(unordered);
        })
        await fs.writeFile(inputBestProgramsFilePath, JSON.stringify(newData, undefined, 4));
    }

})().catch(err => {
    console.error(err);
    process.exit(1);
});
