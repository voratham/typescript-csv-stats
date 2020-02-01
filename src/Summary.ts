import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinAnalysis"
import { HtmlReport } from "./reportTargets/HtmlReport"

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {

    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        )
    }

    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget) {
    }

    bindAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output)

    }


}

