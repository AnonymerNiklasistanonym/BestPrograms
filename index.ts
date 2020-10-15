import * as BestPrograms from "./types/best_programs";

import { promises as fs } from "fs";
import * as path from "path";
import { performance } from "perf_hooks";

import * as render from "./render";


/** Input file path to data file */
const inputBestProgramsFilePath = path.join(__dirname, "best_programs.json");

/** Input file path to README file */
const inputOutputBestProgramsReadmeFilePath = path.join(__dirname, "README.md");

/** Input file README indicators for location of best programs section */
const readmeBestProgramsIndicators = {
    begin: `[//]: # (Best Programs begin)`,
    end: `[//]: # (Best Programs end)`
};

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

})().catch(err => {
    console.error(err);
    process.exit(1);
});
