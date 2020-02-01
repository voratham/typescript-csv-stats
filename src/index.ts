// import { CsvFileReader } from "./inheritance/CsvFileReader"
// import { MatchReader } from "./inheritance/MatchReader"
import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"
import { MatchResult } from "./MatchResult"

// Inheritance
// const reader = new MatchReader("football.csv")
// reader.read()

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load()



let manUnitedWins = 0;

for (const match of matchReader.matches) {
    if (match[1] === `Man United` && match[5] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[1] === `Man United` && match[5] === MatchResult.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United won ${manUnitedWins} games`)