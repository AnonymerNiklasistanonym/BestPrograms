/* eslint-disable */
/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Pointer to the schema against which this document should be validated
 */
export type Schema = string;

export interface BestPrograms {
  $schema?: Schema;
  /**
   * The 'best' program list
   */
  programs: Program[];
}
/**
 * A program
 *
 * This interface was referenced by `BestPrograms`'s JSON-Schema
 * via the `definition` "program".
 */
export interface Program {
  /**
   * Bug specific program descriptions
   */
  bugs?: string;
  /**
   * The main category this program belongs to
   */
  category: string;
  /**
   * Program description
   */
  description: string;
  /**
   * Program has a GUI
   */
  gui?: boolean;
  /**
   * Program name
   */
  name: string;
  /**
   * Program source code is publicly available
   */
  openSource?:
    | boolean
    | (
        | "APACHE"
        | "BSD"
        | "MIT"
        | "GPL"
        | "GPL2"
        | "GPL3"
        | "LGPL"
        | "LGPL2.1"
        | "LGPL3"
        | "MPL"
        | "CCPL"
        | "Unlicense"
      )[]
    | (
        | "APACHE"
        | "BSD"
        | "MIT"
        | "GPL"
        | "GPL2"
        | "GPL3"
        | "LGPL"
        | "LGPL2.1"
        | "LGPL3"
        | "MPL"
        | "CCPL"
        | "Unlicense"
      );
  /**
   * Package Manager information for this program
   */
  packageManagerInfo?: {
    /**
     * The pacman ID
     */
    pacman?: string;
    /**
     * The pacman group ID
     */
    pacmanGroup?: string;
    /**
     * The pacman AUR ID
     */
    pacmanAur?: string;
    /**
     * The pacman AUR Git version ID
     */
    pacmanAurGit?: string;
    /**
     * The pacman AUR Nightly version ID
     */
    pacmanAurNightly?: string;
  };
  /**
   * The recommended semester/Das empfohlene Semester
   */
  platformInfo?: {
    /**
     * This program is available on Linux
     */
    linux?: boolean;
    /**
     * Does the program need Linux sudo rights to run essential functions
     */
    linuxSudoRightsNecessary?: boolean;
    /**
     * This program is available on Windows
     */
    windows?: boolean;
    /**
     * Does the program need Windows admin rights to run essential functions
     */
    windowsAdminRightsNecessary?: boolean;
  };
  /**
   * The price of the program if it has one
   */
  price?: string;
  /**
   * Setup specific program descriptions
   */
  setup?: string;
  /**
   * Tags that explain this program better
   */
  tags?: string[];
  /**
   * Program website
   */
  website: string;
}
/**
 * Package Mangagers on which this program is available
 *
 * This interface was referenced by `BestPrograms`'s JSON-Schema
 * via the `definition` "packageManagerInfo".
 */
export interface PackageManagerInfo {
  /**
   * The pacman ID
   */
  pacman?: string;
  /**
   * The pacman group ID
   */
  pacmanGroup?: string;
  /**
   * The pacman AUR ID
   */
  pacmanAur?: string;
  /**
   * The pacman AUR Git version ID
   */
  pacmanAurGit?: string;
  /**
   * The pacman AUR Nightly version ID
   */
  pacmanAurNightly?: string;
}
/**
 * Platforms on which this program is available
 *
 * This interface was referenced by `BestPrograms`'s JSON-Schema
 * via the `definition` "platformInfo".
 */
export interface PlatformInfo {
  /**
   * This program is available on Linux
   */
  linux?: boolean;
  /**
   * Does the program need Linux sudo rights to run essential functions
   */
  linuxSudoRightsNecessary?: boolean;
  /**
   * This program is available on Windows
   */
  windows?: boolean;
  /**
   * Does the program need Windows admin rights to run essential functions
   */
  windowsAdminRightsNecessary?: boolean;
}
