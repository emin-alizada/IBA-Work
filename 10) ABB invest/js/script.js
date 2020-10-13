class CalculateStatistics {
    constructor(results) {
        this.dataFromCSV = results.data;
        this.convertToArrayObject();
    }

    convertToArrayObject() {
        this.results = this.dataFromCSV
            .filter((row, index) => index !== 0 && index !== this.dataFromCSV.length - 1)
            .map((row, index) => {
                return {
                    id: parseInt(row[0]),
                    date: row[1],
                    day: parseInt(row[2]),
                    month: parseInt(row[3]),
                    year: parseInt(row[4]),
                    cases: parseInt(row[5]),
                    deaths: parseInt(row[6]),
                    country: row[7],
                    code: row[8],
                    population: parseInt(row[9]),
                    continentExp: row[10],
                    cases_cum: parseInt(row[11]),
                    deaths_cum: parseInt(row[12]),
                }
            })
    }

    calculateMean (meanOf) {
        return (this.results.reduce((reduced, currentValue) => reduced + currentValue[`${meanOf}`], 0) / this.results.length).toFixed(2);
    }

    calculateMaxValue (valueOf) {
        return Math.max(...this.results.map((row => row[valueOf])));
    }

    calculateMinValue (valueOf) {
        return Math.min(...this.results.map((row => row[valueOf])));
    }

    calculateMinValueByMonth (valueOf, month) {
        return Math.min(...this.results.filter(row => {return row.month === month ? true : false}).map(row => row[valueOf]));
    }

    calculateRange (rangeOf) {
        return this.calculateMaxValue(rangeOf) - this.calculateMinValue(rangeOf);
    }


    calculateMedianValue (valueOf) {
        const sortedArray = this.results.sort((a, b) => a[valueOf] - b[valueOf]);

        return sortedArray.length % 2 === 0 ?
            (sortedArray[(sortedArray.length / 2) - 1][valueOf] + sortedArray[(sortedArray.length / 2)][valueOf]) / 2 :
            sortedArray[Math.floor(sortedArray.length / 2)][valueOf];
    }

    calculateVarianceValue (valuOf) {
        let variance;
        let n = this.results.length;
        let sum = 0;

        this.results.forEach(row => {
            sum += Math.pow( (row[valuOf] - this.calculateMean(valuOf)), 2);
        })


        variance = Math.sqrt(( 1/(n-1)) * sum);

        return variance.toFixed(2);
    }

    calculateStdDeviationValue (valueOf) {
        let deviation;
        let N = this.results.length;
        let sum = 0;

        this.results.forEach(row => {
            sum += Math.pow( (row[valueOf] - this.calculateMean(valueOf)), 2);
        })

        deviation = Math.sqrt(( 1/N) * sum);

        return deviation.toFixed(2);
    }
}

if (document.getElementById('analysis')) {
    Papa.parse(csvDataNew(), {
        complete: function (results) {
            insertStatisticsInfo(results)
        }
    });

    function insertStatisticsInfo (results) {
        const statistics = new CalculateStatistics(results);
        innerTextById('meanDeath', statistics.calculateMean('deaths'));
        innerTextById('meanInfections', statistics.calculateMean('cases'));
        innerTextById('minimumDeathCase', statistics.calculateMinValueByMonth('deaths', 4).toString());
        innerTextById('minimumInfectionCase', statistics.calculateMinValueByMonth('cases', 4).toString());
        innerTextById('maximumInfection', statistics.calculateMaxValue('cases'));
        innerTextById('maximumDeath', statistics.calculateMaxValue('deaths'));
        innerTextById('rangeInfection', statistics.calculateRange('cases'));
        innerTextById('rangeDeath', statistics.calculateRange('deaths'));
        innerTextById('medianDeath', statistics.calculateMedianValue('deaths'));
        innerTextById('medianCases', statistics.calculateMedianValue('cases'));
        innerTextById('varianceInfection', statistics.calculateVarianceValue('cases'));
        innerTextById('varianceDeath', statistics.calculateVarianceValue('deaths'));
        innerTextById('stdInfection', statistics.calculateStdDeviationValue('cases'))
        innerTextById('stdDeath', statistics.calculateStdDeviationValue('deaths'))
    }

    function innerTextById (id, value) {
        document.getElementById(id).innerText = value;
    }

    function csvData() {
        return ',date,day,month,year,cases,deaths,country,code,population,continentExp,cases_cum,deaths_cum\n' +
            '0,12/31/2019,31,12,2019,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '1,1/1/2020,1,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '2,1/2/2020,2,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '3,1/3/2020,3,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '4,1/4/2020,4,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '5,1/5/2020,5,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '6,1/6/2020,6,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '7,1/7/2020,7,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '8,1/8/2020,8,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '9,1/9/2020,9,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '10,1/10/2020,10,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '11,1/11/2020,11,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '12,1/12/2020,12,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '13,1/13/2020,13,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '14,1/14/2020,14,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '15,1/15/2020,15,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '16,1/16/2020,16,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '17,1/17/2020,17,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '18,1/18/2020,18,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '19,1/19/2020,19,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '20,1/20/2020,20,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '21,1/21/2020,21,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '22,1/22/2020,22,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '23,1/23/2020,23,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '24,1/24/2020,24,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '25,1/25/2020,25,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '26,1/26/2020,26,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '27,1/27/2020,27,1,2020,0,0,Germany,DE,82927922,Europe,0,0\n' +
            '28,1/28/2020,28,1,2020,1,0,Germany,DE,82927922,Europe,1,0\n' +
            '29,1/29/2020,29,1,2020,3,0,Germany,DE,82927922,Europe,4,0\n' +
            '30,1/30/2020,30,1,2020,0,0,Germany,DE,82927922,Europe,4,0\n' +
            '31,1/31/2020,31,1,2020,1,0,Germany,DE,82927922,Europe,5,0\n' +
            '32,2/1/2020,1,2,2020,2,0,Germany,DE,82927922,Europe,7,0\n' +
            '33,2/2/2020,2,2,2020,1,0,Germany,DE,82927922,Europe,8,0\n' +
            '34,2/3/2020,3,2,2020,1,0,Germany,DE,82927922,Europe,9,0\n' +
            '35,2/4/2020,4,2,2020,2,0,Germany,DE,82927922,Europe,11,0\n' +
            '36,2/5/2020,5,2,2020,0,0,Germany,DE,82927922,Europe,11,0\n' +
            '37,2/6/2020,6,2,2020,0,0,Germany,DE,82927922,Europe,11,0\n' +
            '38,2/7/2020,7,2,2020,1,0,Germany,DE,82927922,Europe,12,0\n' +
            '39,2/8/2020,8,2,2020,1,0,Germany,DE,82927922,Europe,13,0\n' +
            '40,2/9/2020,9,2,2020,0,0,Germany,DE,82927922,Europe,13,0\n' +
            '41,2/10/2020,10,2,2020,0,0,Germany,DE,82927922,Europe,13,0\n' +
            '42,2/11/2020,11,2,2020,0,0,Germany,DE,82927922,Europe,13,0\n' +
            '43,2/12/2020,12,2,2020,2,0,Germany,DE,82927922,Europe,15,0\n' +
            '44,2/13/2020,13,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '45,2/14/2020,14,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '46,2/15/2020,15,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '47,2/16/2020,16,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '48,2/17/2020,17,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '49,2/18/2020,18,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '50,2/19/2020,19,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '51,2/20/2020,20,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '52,2/21/2020,21,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '53,2/22/2020,22,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '54,2/23/2020,23,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '55,2/24/2020,24,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '56,2/25/2020,25,2,2020,0,0,Germany,DE,82927922,Europe,15,0\n' +
            '57,2/26/2020,26,2,2020,2,0,Germany,DE,82927922,Europe,17,0\n' +
            '58,2/27/2020,27,2,2020,4,0,Germany,DE,82927922,Europe,21,0\n' +
            '59,2/28/2020,28,2,2020,26,0,Germany,DE,82927922,Europe,47,0\n' +
            '60,2/29/2020,29,2,2020,10,0,Germany,DE,82927922,Europe,57,0\n' +
            '61,3/1/2020,1,3,2020,54,0,Germany,DE,82927922,Europe,111,0\n' +
            '62,3/2/2020,2,3,2020,18,0,Germany,DE,82927922,Europe,129,0\n' +
            '63,3/3/2020,3,3,2020,28,0,Germany,DE,82927922,Europe,157,0\n' +
            '64,3/4/2020,4,3,2020,39,0,Germany,DE,82927922,Europe,196,0\n' +
            '65,3/5/2020,5,3,2020,66,0,Germany,DE,82927922,Europe,262,0\n' +
            '66,3/6/2020,6,3,2020,138,0,Germany,DE,82927922,Europe,400,0\n' +
            '67,3/7/2020,7,3,2020,284,0,Germany,DE,82927922,Europe,684,0\n' +
            '68,3/8/2020,8,3,2020,163,0,Germany,DE,82927922,Europe,847,0\n' +
            '69,3/9/2020,9,3,2020,55,0,Germany,DE,82927922,Europe,902,0\n' +
            '70,3/10/2020,10,3,2020,237,2,Germany,DE,82927922,Europe,1139,2\n' +
            '71,3/11/2020,11,3,2020,157,0,Germany,DE,82927922,Europe,1296,2\n' +
            '72,3/12/2020,12,3,2020,271,1,Germany,DE,82927922,Europe,1567,3\n' +
            '73,3/13/2020,13,3,2020,802,2,Germany,DE,82927922,Europe,2369,5\n' +
            '74,3/14/2020,14,3,2020,693,0,Germany,DE,82927922,Europe,3062,5\n' +
            '75,3/15/2020,15,3,2020,733,3,Germany,DE,82927922,Europe,3795,8\n' +
            '76,3/16/2020,16,3,2020,1043,4,Germany,DE,82927922,Europe,4838,12\n' +
            '77,3/17/2020,17,3,2020,1174,1,Germany,DE,82927922,Europe,6012,13\n' +
            '78,3/18/2020,18,3,2020,1144,0,Germany,DE,82927922,Europe,7156,13\n' +
            '79,3/19/2020,19,3,2020,1042,0,Germany,DE,82927922,Europe,8198,13\n' +
            '80,3/20/2020,20,3,2020,5940,30,Germany,DE,82927922,Europe,14138,43\n' +
            '81,3/21/2020,21,3,2020,4049,2,Germany,DE,82927922,Europe,18187,45\n' +
            '82,3/22/2020,22,3,2020,3276,22,Germany,DE,82927922,Europe,21463,67\n' +
            '83,3/23/2020,23,3,2020,3311,27,Germany,DE,82927922,Europe,24774,94\n' +
            '84,3/24/2020,24,3,2020,4438,32,Germany,DE,82927922,Europe,29212,126\n' +
            '85,3/25/2020,25,3,2020,2342,23,Germany,DE,82927922,Europe,31554,149\n' +
            '86,3/26/2020,26,3,2020,4954,49,Germany,DE,82927922,Europe,36508,198\n' +
            '87,3/27/2020,27,3,2020,5780,55,Germany,DE,82927922,Europe,42288,253\n' +
            '88,3/28/2020,28,3,2020,6294,72,Germany,DE,82927922,Europe,48582,325\n' +
            '89,3/29/2020,29,3,2020,3965,64,Germany,DE,82927922,Europe,52547,389\n' +
            '90,3/30/2020,30,3,2020,4751,66,Germany,DE,82927922,Europe,57298,455\n' +
            '91,3/31/2020,31,3,2020,4615,128,Germany,DE,82927922,Europe,61913,583\n' +
            '92,4/1/2020,1,4,2020,5453,149,Germany,DE,82927922,Europe,67366,732\n' +
            '93,4/2/2020,2,4,2020,6156,140,Germany,DE,82927922,Europe,73522,872\n' +
            '94,4/3/2020,3,4,2020,6174,145,Germany,DE,82927922,Europe,79696,1017\n' +
            '95,4/4/2020,4,4,2020,6082,141,Germany,DE,82927922,Europe,85778,1158\n' +
            '96,4/5/2020,5,4,2020,5936,184,Germany,DE,82927922,Europe,91714,1342\n' +
            '97,4/6/2020,6,4,2020,3677,92,Germany,DE,82927922,Europe,95391,1434\n' +
            '98,4/7/2020,7,4,2020,3834,173,Germany,DE,82927922,Europe,99225,1607\n' +
            '99,4/8/2020,8,4,2020,4003,254,Germany,DE,82927922,Europe,103228,1861\n' +
            '100,4/9/2020,9,4,2020,4974,246,Germany,DE,82927922,Europe,108202,2107\n' +
            '101,4/10/2020,10,4,2020,5323,266,Germany,DE,82927922,Europe,113525,2373\n' +
            '102,4/11/2020,11,4,2020,4133,171,Germany,DE,82927922,Europe,117658,2544\n' +
            '103,4/12/2020,12,4,2020,2821,129,Germany,DE,82927922,Europe,120479,2673\n' +
            '104,4/13/2020,13,4,2020,2537,126,Germany,DE,82927922,Europe,123016,2799\n' +
            '105,4/14/2020,14,4,2020,2082,170,Germany,DE,82927922,Europe,125098,2969\n' +
            '106,4/15/2020,15,4,2020,2486,285,Germany,DE,82927922,Europe,127584,3254\n' +
            '107,4/16/2020,16,4,2020,2866,315,Germany,DE,82927922,Europe,130450,3569\n' +
            '108,4/17/2020,17,4,2020,3380,299,Germany,DE,82927922,Europe,133830,3868\n' +
            '109,4/18/2020,18,4,2020,3609,242,Germany,DE,82927922,Europe,137439,4110\n' +
            '110,4/19/2020,19,4,2020,2458,184,Germany,DE,82927922,Europe,139897,4294\n' +
            '111,4/20/2020,20,4,2020,1775,110,Germany,DE,82927922,Europe,141672,4404\n' +
            '112,4/21/2020,21,4,2020,1785,194,Germany,DE,82927922,Europe,143457,4598\n' +
            '113,4/22/2020,22,4,2020,2237,281,Germany,DE,82927922,Europe,145694,4879\n' +
            '114,4/23/2020,23,4,2020,2352,215,Germany,DE,82927922,Europe,148046,5094\n' +
            '115,4/24/2020,24,4,2020,2337,227,Germany,DE,82927922,Europe,150383,5321\n' +
            '116,4/25/2020,25,4,2020,2055,179,Germany,DE,82927922,Europe,152438,5500\n' +
            '117,4/26/2020,26,4,2020,1737,140,Germany,DE,82927922,Europe,154175,5640\n'
    }

    function csvDataNew() {
        return '\tdate\tday\tmonth\tyear\tcases\tdeaths\tcountry\tcode\tpopulation\tcontinentExp\tcases_cum\tdeaths_cum\n' +
            '0\t2019-12-31\t31\t12\t2019\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '1\t2020-01-01\t1\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '2\t2020-01-02\t2\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '3\t2020-01-03\t3\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '4\t2020-01-04\t4\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '5\t2020-01-05\t5\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '6\t2020-01-06\t6\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '7\t2020-01-07\t7\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '8\t2020-01-08\t8\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '9\t2020-01-09\t9\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '10\t2020-01-10\t10\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '11\t2020-01-11\t11\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '12\t2020-01-12\t12\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '13\t2020-01-13\t13\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '14\t2020-01-14\t14\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '15\t2020-01-15\t15\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '16\t2020-01-16\t16\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '17\t2020-01-17\t17\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '18\t2020-01-18\t18\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '19\t2020-01-19\t19\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '20\t2020-01-20\t20\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '21\t2020-01-21\t21\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '22\t2020-01-22\t22\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '23\t2020-01-23\t23\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '24\t2020-01-24\t24\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '25\t2020-01-25\t25\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '26\t2020-01-26\t26\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '27\t2020-01-27\t27\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t0\t0\n' +
            '28\t2020-01-28\t28\t1\t2020\t1\t0\tGermany\tDE\t82927922\tEurope\t1\t0\n' +
            '29\t2020-01-29\t29\t1\t2020\t3\t0\tGermany\tDE\t82927922\tEurope\t4\t0\n' +
            '30\t2020-01-30\t30\t1\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t4\t0\n' +
            '31\t2020-01-31\t31\t1\t2020\t1\t0\tGermany\tDE\t82927922\tEurope\t5\t0\n' +
            '32\t2020-02-01\t1\t2\t2020\t2\t0\tGermany\tDE\t82927922\tEurope\t7\t0\n' +
            '33\t2020-02-02\t2\t2\t2020\t1\t0\tGermany\tDE\t82927922\tEurope\t8\t0\n' +
            '34\t2020-02-03\t3\t2\t2020\t1\t0\tGermany\tDE\t82927922\tEurope\t9\t0\n' +
            '35\t2020-02-04\t4\t2\t2020\t2\t0\tGermany\tDE\t82927922\tEurope\t11\t0\n' +
            '36\t2020-02-05\t5\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t11\t0\n' +
            '37\t2020-02-06\t6\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t11\t0\n' +
            '38\t2020-02-07\t7\t2\t2020\t1\t0\tGermany\tDE\t82927922\tEurope\t12\t0\n' +
            '39\t2020-02-08\t8\t2\t2020\t1\t0\tGermany\tDE\t82927922\tEurope\t13\t0\n' +
            '40\t2020-02-09\t9\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t13\t0\n' +
            '41\t2020-02-10\t10\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t13\t0\n' +
            '42\t2020-02-11\t11\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t13\t0\n' +
            '43\t2020-02-12\t12\t2\t2020\t2\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '44\t2020-02-13\t13\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '45\t2020-02-14\t14\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '46\t2020-02-15\t15\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '47\t2020-02-16\t16\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '48\t2020-02-17\t17\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '49\t2020-02-18\t18\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '50\t2020-02-19\t19\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '51\t2020-02-20\t20\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '52\t2020-02-21\t21\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '53\t2020-02-22\t22\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '54\t2020-02-23\t23\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '55\t2020-02-24\t24\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '56\t2020-02-25\t25\t2\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t15\t0\n' +
            '57\t2020-02-26\t26\t2\t2020\t2\t0\tGermany\tDE\t82927922\tEurope\t17\t0\n' +
            '58\t2020-02-27\t27\t2\t2020\t4\t0\tGermany\tDE\t82927922\tEurope\t21\t0\n' +
            '59\t2020-02-28\t28\t2\t2020\t26\t0\tGermany\tDE\t82927922\tEurope\t47\t0\n' +
            '60\t2020-02-29\t29\t2\t2020\t10\t0\tGermany\tDE\t82927922\tEurope\t57\t0\n' +
            '61\t2020-03-01\t1\t3\t2020\t54\t0\tGermany\tDE\t82927922\tEurope\t111\t0\n' +
            '62\t2020-03-02\t2\t3\t2020\t18\t0\tGermany\tDE\t82927922\tEurope\t129\t0\n' +
            '63\t2020-03-03\t3\t3\t2020\t28\t0\tGermany\tDE\t82927922\tEurope\t157\t0\n' +
            '64\t2020-03-04\t4\t3\t2020\t39\t0\tGermany\tDE\t82927922\tEurope\t196\t0\n' +
            '65\t2020-03-05\t5\t3\t2020\t66\t0\tGermany\tDE\t82927922\tEurope\t262\t0\n' +
            '66\t2020-03-06\t6\t3\t2020\t138\t0\tGermany\tDE\t82927922\tEurope\t400\t0\n' +
            '67\t2020-03-07\t7\t3\t2020\t284\t0\tGermany\tDE\t82927922\tEurope\t684\t0\n' +
            '68\t2020-03-08\t8\t3\t2020\t163\t0\tGermany\tDE\t82927922\tEurope\t847\t0\n' +
            '69\t2020-03-09\t9\t3\t2020\t55\t0\tGermany\tDE\t82927922\tEurope\t902\t0\n' +
            '70\t2020-03-10\t10\t3\t2020\t237\t2\tGermany\tDE\t82927922\tEurope\t1139\t2\n' +
            '71\t2020-03-11\t11\t3\t2020\t157\t0\tGermany\tDE\t82927922\tEurope\t1296\t2\n' +
            '72\t2020-03-12\t12\t3\t2020\t271\t1\tGermany\tDE\t82927922\tEurope\t1567\t3\n' +
            '73\t2020-03-13\t13\t3\t2020\t802\t2\tGermany\tDE\t82927922\tEurope\t2369\t5\n' +
            '74\t2020-03-14\t14\t3\t2020\t693\t0\tGermany\tDE\t82927922\tEurope\t3062\t5\n' +
            '75\t2020-03-15\t15\t3\t2020\t733\t3\tGermany\tDE\t82927922\tEurope\t3795\t8\n' +
            '76\t2020-03-16\t16\t3\t2020\t1043\t4\tGermany\tDE\t82927922\tEurope\t4838\t12\n' +
            '77\t2020-03-17\t17\t3\t2020\t1174\t1\tGermany\tDE\t82927922\tEurope\t6012\t13\n' +
            '78\t2020-03-18\t18\t3\t2020\t1144\t0\tGermany\tDE\t82927922\tEurope\t7156\t13\n' +
            '79\t2020-03-19\t19\t3\t2020\t1042\t0\tGermany\tDE\t82927922\tEurope\t8198\t13\n' +
            '80\t2020-03-20\t20\t3\t2020\t5940\t30\tGermany\tDE\t82927922\tEurope\t14138\t43\n' +
            '81\t2020-03-21\t21\t3\t2020\t4049\t2\tGermany\tDE\t82927922\tEurope\t18187\t45\n' +
            '82\t2020-03-22\t22\t3\t2020\t3276\t22\tGermany\tDE\t82927922\tEurope\t21463\t67\n' +
            '83\t2020-03-23\t23\t3\t2020\t3311\t27\tGermany\tDE\t82927922\tEurope\t24774\t94\n' +
            '84\t2020-03-24\t24\t3\t2020\t4438\t32\tGermany\tDE\t82927922\tEurope\t29212\t126\n' +
            '85\t2020-03-25\t25\t3\t2020\t2342\t23\tGermany\tDE\t82927922\tEurope\t31554\t149\n' +
            '86\t2020-03-26\t26\t3\t2020\t4954\t49\tGermany\tDE\t82927922\tEurope\t36508\t198\n' +
            '87\t2020-03-27\t27\t3\t2020\t5780\t55\tGermany\tDE\t82927922\tEurope\t42288\t253\n' +
            '88\t2020-03-28\t28\t3\t2020\t6294\t72\tGermany\tDE\t82927922\tEurope\t48582\t325\n' +
            '89\t2020-03-29\t29\t3\t2020\t3965\t64\tGermany\tDE\t82927922\tEurope\t52547\t389\n' +
            '90\t2020-03-30\t30\t3\t2020\t4751\t66\tGermany\tDE\t82927922\tEurope\t57298\t455\n' +
            '91\t2020-03-31\t31\t3\t2020\t4615\t128\tGermany\tDE\t82927922\tEurope\t61913\t583\n' +
            '92\t2020-04-01\t1\t4\t2020\t5453\t149\tGermany\tDE\t82927922\tEurope\t67366\t732\n' +
            '93\t2020-04-02\t2\t4\t2020\t6156\t140\tGermany\tDE\t82927922\tEurope\t73522\t872\n' +
            '94\t2020-04-03\t3\t4\t2020\t6174\t145\tGermany\tDE\t82927922\tEurope\t79696\t1017\n' +
            '95\t2020-04-04\t4\t4\t2020\t6082\t141\tGermany\tDE\t82927922\tEurope\t85778\t1158\n' +
            '96\t2020-04-05\t5\t4\t2020\t5936\t184\tGermany\tDE\t82927922\tEurope\t91714\t1342\n' +
            '97\t2020-04-06\t6\t4\t2020\t3677\t92\tGermany\tDE\t82927922\tEurope\t95391\t1434\n' +
            '98\t2020-04-07\t7\t4\t2020\t3834\t173\tGermany\tDE\t82927922\tEurope\t99225\t1607\n' +
            '99\t2020-04-08\t8\t4\t2020\t4003\t254\tGermany\tDE\t82927922\tEurope\t103228\t1861\n' +
            '100\t2020-04-09\t9\t4\t2020\t4974\t246\tGermany\tDE\t82927922\tEurope\t108202\t2107\n' +
            '101\t2020-04-10\t10\t4\t2020\t5323\t266\tGermany\tDE\t82927922\tEurope\t113525\t2373\n' +
            '102\t2020-04-11\t11\t4\t2020\t4133\t171\tGermany\tDE\t82927922\tEurope\t117658\t2544\n' +
            '103\t2020-04-12\t12\t4\t2020\t2821\t129\tGermany\tDE\t82927922\tEurope\t120479\t2673\n' +
            '104\t2020-04-13\t13\t4\t2020\t2537\t126\tGermany\tDE\t82927922\tEurope\t123016\t2799\n' +
            '105\t2020-04-14\t14\t4\t2020\t2082\t170\tGermany\tDE\t82927922\tEurope\t125098\t2969\n' +
            '106\t2020-04-15\t15\t4\t2020\t2486\t285\tGermany\tDE\t82927922\tEurope\t127584\t3254\n' +
            '107\t2020-04-16\t16\t4\t2020\t2866\t315\tGermany\tDE\t82927922\tEurope\t130450\t3569\n' +
            '108\t2020-04-17\t17\t4\t2020\t3380\t299\tGermany\tDE\t82927922\tEurope\t133830\t3868\n' +
            '109\t2020-04-18\t18\t4\t2020\t3609\t242\tGermany\tDE\t82927922\tEurope\t137439\t4110\n' +
            '110\t2020-04-19\t19\t4\t2020\t2458\t184\tGermany\tDE\t82927922\tEurope\t139897\t4294\n' +
            '111\t2020-04-20\t20\t4\t2020\t1775\t110\tGermany\tDE\t82927922\tEurope\t141672\t4404\n' +
            '112\t2020-04-21\t21\t4\t2020\t1785\t194\tGermany\tDE\t82927922\tEurope\t143457\t4598\n' +
            '113\t2020-04-22\t22\t4\t2020\t2237\t281\tGermany\tDE\t82927922\tEurope\t145694\t4879\n' +
            '114\t2020-04-23\t23\t4\t2020\t2352\t215\tGermany\tDE\t82927922\tEurope\t148046\t5094\n' +
            '115\t2020-04-24\t24\t4\t2020\t2337\t227\tGermany\tDE\t82927922\tEurope\t150383\t5321\n' +
            '116\t2020-04-25\t25\t4\t2020\t2055\t179\tGermany\tDE\t82927922\tEurope\t152438\t5500\n' +
            '117\t2020-04-26\t26\t4\t2020\t1737\t140\tGermany\tDE\t82927922\tEurope\t154175\t5640\n' +
            '118\t2020-04-27\t27\t4\t2020\t1018\t110\tGermany\tDE\t82927922\tEurope\t155193\t5750\n' +
            '119\t2020-04-28\t28\t4\t2020\t1144\t163\tGermany\tDE\t82927922\tEurope\t156337\t5913\n' +
            '120\t2020-04-29\t29\t4\t2020\t1304\t202\tGermany\tDE\t82927922\tEurope\t157641\t6115\n' +
            '121\t2020-04-30\t30\t4\t2020\t1478\t173\tGermany\tDE\t82927922\tEurope\t159119\t6288\n' +
            '122\t2020-05-01\t1\t5\t2020\t0\t0\tGermany\tDE\t82927922\tEurope\t159119\t6288\n' +
            '123\t2020-05-02\t2\t5\t2020\t2584\t287\tGermany\tDE\t82927922\tEurope\t161703\t6575\n' +
            '124\t2020-05-03\t3\t5\t2020\t793\t74\tGermany\tDE\t82927922\tEurope\t162496\t6649\n' +
            '125\t2020-05-04\t4\t5\t2020\t679\t43\tGermany\tDE\t82927922\tEurope\t163175\t6692\n' +
            '126\t2020-05-05\t5\t5\t2020\t685\t139\tGermany\tDE\t82927922\tEurope\t163860\t6831\n' +
            '127\t2020-05-06\t6\t5\t2020\t1037\t165\tGermany\tDE\t82927922\tEurope\t164897\t6996\n' +
            '128\t2020-05-07\t7\t5\t2020\t1194\t123\tGermany\tDE\t82927922\tEurope\t166091\t7119\n' +
            '129\t2020-05-08\t8\t5\t2020\t1209\t147\tGermany\tDE\t82927922\tEurope\t167300\t7266\n' +
            '130\t2020-05-09\t9\t5\t2020\t1251\t103\tGermany\tDE\t82927922\tEurope\t168551\t7369\n' +
            '131\t2020-05-10\t10\t5\t2020\t667\t26\tGermany\tDE\t82927922\tEurope\t169218\t7395\n' +
            '132\t2020-05-11\t11\t5\t2020\t357\t22\tGermany\tDE\t82927922\tEurope\t169575\t7417\n' +
            '133\t2020-05-12\t12\t5\t2020\t933\t116\tGermany\tDE\t82927922\tEurope\t170508\t7533\n' +
            '134\t2020-05-13\t13\t5\t2020\t798\t101\tGermany\tDE\t82927922\tEurope\t171306\t7634\n' +
            '135\t2020-05-14\t14\t5\t2020\t933\t89\tGermany\tDE\t82927922\tEurope\t172239\t7723\n' +
            '136\t2020-05-15\t15\t5\t2020\t913\t101\tGermany\tDE\t82927922\tEurope\t173152\t7824\n' +
            '137\t2020-05-16\t16\t5\t2020\t620\t57\tGermany\tDE\t82927922\tEurope\t173772\t7881\n' +
            '138\t2020-05-17\t17\t5\t2020\t583\t33\tGermany\tDE\t82927922\tEurope\t174355\t7914\n' +
            '139\t2020-05-18\t18\t5\t2020\t342\t21\tGermany\tDE\t82927922\tEurope\t174697\t7935\n' +
            '140\t2020-05-19\t19\t5\t2020\t513\t72\tGermany\tDE\t82927922\tEurope\t175210\t8007\n' +
            '141\t2020-05-20\t20\t5\t2020\t797\t83\tGermany\tDE\t82927922\tEurope\t176007\t8090\n' +
            '142\t2020-05-21\t21\t5\t2020\t745\t57\tGermany\tDE\t82927922\tEurope\t176752\t8147\n' +
            '143\t2020-05-22\t22\t5\t2020\t460\t27\tGermany\tDE\t82927922\tEurope\t177212\t8174\n' +
            '144\t2020-05-23\t23\t5\t2020\t638\t42\tGermany\tDE\t82927922\tEurope\t177850\t8216\n' +
            '145\t2020-05-24\t24\t5\t2020\t431\t31\tGermany\tDE\t82927922\tEurope\t178281\t8247\n' +
            '146\t2020-05-25\t25\t5\t2020\t289\t10\tGermany\tDE\t82927922\tEurope\t178570\t8257\n' +
            '147\t2020-05-26\t26\t5\t2020\t432\t45\tGermany\tDE\t82927922\tEurope\t179002\t8302\n' +
            '148\t2020-05-27\t27\t5\t2020\t362\t47\tGermany\tDE\t82927922\tEurope\t179364\t8349\n' +
            '149\t2020-05-28\t28\t5\t2020\t353\t62\tGermany\tDE\t82927922\tEurope\t179717\t8411\n' +
            '150\t2020-05-29\t29\t5\t2020\t741\t39\tGermany\tDE\t82927922\tEurope\t180458\t8450\n' +
            '151\t2020-05-30\t30\t5\t2020\t738\t39\tGermany\tDE\t82927922\tEurope\t181196\t8489\n' +
            '152\t2020-05-31\t31\t5\t2020\t286\t11\tGermany\tDE\t82927922\tEurope\t181482\t8500\n' +
            '153\t2020-06-01\t1\t6\t2020\t333\t11\tGermany\tDE\t82927922\tEurope\t181815\t8511\n' +
            '154\t2020-06-02\t2\t6\t2020\t213\t11\tGermany\tDE\t82927922\tEurope\t182028\t8522\n' +
            '155\t2020-06-03\t3\t6\t2020\t342\t29\tGermany\tDE\t82927922\tEurope\t182370\t8551\n' +
            '156\t2020-06-04\t4\t6\t2020\t394\t30\tGermany\tDE\t82927922\tEurope\t182764\t8581\n'
    }
}

if (document.getElementById('contactUs')) {
    document.querySelector('.contact-us-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const mail = document.getElementById('mailAddress');
        mail.nextElementSibling.style.display = 'none';
        const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (mailRegex.test(mail.value)){
            alert("We will contact you soon");
        }
        else {
            mail.nextElementSibling.style.display = 'inline-block';
        }
    })
}