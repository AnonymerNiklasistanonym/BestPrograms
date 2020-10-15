import { promises as fs } from "fs";
import { compileFromFile } from "json-schema-to-typescript";
import * as path from "path";

const jsonSchemaFilePath = path.join(__dirname, "best_programs.schema.json");
const outputFilePath = path.join(__dirname, "best_programs.ts");

compileFromFile(jsonSchemaFilePath, { unreachableDefinitions: true })
    .then(ts => fs.writeFile(outputFilePath, "/* eslint-disable */\n" + ts))
    .catch(console.error);
