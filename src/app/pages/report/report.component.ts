import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BestAd, Campaign, Graph, Kpis, ReportService } from '../../services/report.service';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  KPIs!: Kpis;

  graphs: Graph[] = [];

  campaigns: Campaign[] = [];

  bestAds: BestAd[] = [];

  constructor(private reportService: ReportService) {}

  async ngOnInit() {
    try {
      // const reportStats = await this.reportService.getReportStats();
      const reportStats = {
        "bestAds": [
          {
            "adCreativeId": "999104492281048",
            "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.66404-15/482040961_998526948861655_5797477558743586844_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=qJ6-4gdOXREQ7kNvgEaaosz&_nc_oc=AdjbD7Syb2JFj_CLOK77bM_KUlAfx1K00oxtqnFIHb7yZTkGy7UG6eASKwIAU7G-WVc&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&_nc_gid=AFFtpvjjm-x0QYyDuW4WKqF&oh=00_AYCVIEznuwpwSJsxjM8rjiJbFljhmnczEI0BTocBMScrpw&oe=67CCB5DF",
            "spend": "35.58",
            "addToCart": "9",
            "purchases": "3",
            "roas": "78.884767",
            "sourceUrl": "https://www.instagram.com/p/DGd5DSCAd6e/"
          },
          {
            "adCreativeId": "987302683344235",
            "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/482368417_2146146925801443_8891528837766306324_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=t_6_jgt-_lwQ7kNvgEJ8iZo&_nc_oc=AdgJKdQcsbkMS2-yvhpG2lSvqW4LBpWO239wWqrb8-TsC6Xa3nqUVAs0AlkYxanetoQ&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYD4Iej2fdm6KeMB8PehBRo1CvZ0V25PDDjAXrwcjkxEpw&oe=67CC8A9C",
            "spend": "5.26",
            "addToCart": "2",
            "purchases": "1",
            "roas": "56",
            "sourceUrl": "https://www.instagram.com/p/DGvZCdGg6_Y/"
          },
          {
            "adCreativeId": "616664797882781",
            "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/482330253_1318818769402978_7020776235178788676_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=0LMfUx6GsJYQ7kNvgGxADdg&_nc_oc=AdhL8gIn2z2Lwodj7m4wzbT_y1IlvtnENvWeGS499t_tpiMzSqmRkmGVFj_sX9_Qqlk&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYB9F03RCD6Mm3gvfRxVB4vdzfbSTP93eDmi5Ligir5jew&oe=67CC9D27",
            "spend": "9.25",
            "addToCart": "2",
            "purchases": "1",
            "roas": "49.492973",
            "sourceUrl": "https://www.instagram.com/p/DGn-IaEMviC/"
          },
          {
            "adCreativeId": "602240142627473",
            "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/481969837_1355762172246485_4879575143008537133_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=b4guDZSS8c4Q7kNvgESbBIY&_nc_oc=AdjFLNnggC70DfFZLBKFlz18AF6LZJp74Tj7c-XcTybhW2PB-c6zPV_nPdly3gILxmk&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYApbosTjpkqEccWb6mP5ancKqBHwrWxqsZkXx00Dj-YMA&oe=67CC83A2",
            "spend": "18.37",
            "addToCart": "4",
            "purchases": "2",
            "roas": "31.899837",
            "sourceUrl": "https://www.instagram.com/p/DGn-qZovLHg/"
          },
          {
            "adCreativeId": "1003305738351059",
            "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/482781653_1342527296863657_4875857026379722657_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=VK60U5kWjTcQ7kNvgE6bcG6&_nc_oc=AdjVYT-e0WQMqM2cHCBEmAb5dSLiFVmA56PLrZjKm72epiK6N69iNusgYrplE8r91X4&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYAfb4qBHmd5wDUPKfdNbtFpRygSS6rMxTHgX4Mjno8uVw&oe=67CCB610",
            "spend": "58.33",
            "addToCart": "3",
            "purchases": "3",
            "roas": "14.268644",
            "sourceUrl": "https://www.instagram.com/p/DGvb2pnAC1m/"
          },
          {
            "adCreativeId": "607389678740139",
            "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.66404-15/480496145_561091326960384_7066753249288058088_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=ExYdA10qzuIQ7kNvgHylgzN&_nc_oc=AdgkncNiRLHEdHzuaQf-pH9slPQ1E_cwmm5BPVg0KMHPCiwV-If0jrWHB5xypq7tAYE&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&_nc_gid=AiWU-hTq0tQmRGxFPd9dHcg&oh=00_AYCFTradDlsgBbc15BfYUHh4m67L4c_IRCzdbNocJvYnbw&oe=67CC9038",
            "spend": "43.33",
            "addToCart": "4",
            "purchases": "1",
            "roas": "7.041311",
            "sourceUrl": "https://www.instagram.com/p/DGVzGT9gWky/"
          },
          {
            "adCreativeId": "2581802685351383",
            "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/482175734_2163869070695198_6133071732448658831_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=e-vbD7o0s9kQ7kNvgFvn2fW&_nc_oc=AdhgU_sR6n25BX2RHfRP63bXy4LuvCyIiLjDf-FEUxRsSgBYmT33cYUxUyqY-pJAtLY&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYBIzCzfPtKafGrDJaBQdo2oplJh-iA1Tvb7Ln_QREpIkQ&oe=67CC94B4",
            "spend": "31.99",
            "addToCart": "3",
            "purchases": "1",
            "roas": "6.81463",
            "sourceUrl": "https://www.instagram.com/p/DGirKm2A17S/"
          },
          {
            "adCreativeId": "28564324859879491",
            "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/482045296_1762738804276693_8742227180650633387_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=vrXslMV22w0Q7kNvgEvXpYc&_nc_oc=AdgsgPlSswEvTctmYNoOOCSKoB3XAXWxQTSeCpCQPOiWouqivY4BzSEgklio71-E08s&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYCtNZ0m932hsUT63V0gPfG7pPFLzhjaNRo6KTYS_nHG6A&oe=67CC85FF",
            "spend": "165.36",
            "addToCart": "20",
            "purchases": "3",
            "roas": "6.555394",
            "sourceUrl": "https://www.instagram.com/p/DGk2v9OgG78/"
          },
          {
            "adCreativeId": "668896835575317",
            "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.66404-15/482501018_1371127267401098_3429702224460618598_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=x4-HQrzcGGcQ7kNvgHdGAwX&_nc_oc=Adh1KkPblesP5SWx-9OJRIrLUaZe2kIe0R2_g3Fy0tV0FQywBuBUL0S5d8Js5ypyojw&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&_nc_gid=A84JYpS5aTCJjiCH5vOfw05&oh=00_AYC29U33dTBKIyFyssbWdd4FznobsjGschyohKLom-l_mg&oe=67CCA1B0",
            "spend": "61.12",
            "addToCart": "15",
            "purchases": "2",
            "roas": "6.329679",
            "sourceUrl": "https://www.instagram.com/p/DGn4zrQswGK/"
          },
          {
            "adCreativeId": "2347075955664736",
            "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/482158371_1388311549209096_201889437673987121_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=dZZSulVq6rkQ7kNvgGbrHug&_nc_oc=AdhB-IwH3S-72bAiA3F0OyDre7V8tsBX1rqw6ttUk51Y9Xmpp_H9fYyTC5An_SMo2a8&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYCi4kiL-STBgDtQZlJsMifc18C8zrZ1ZXoSi7qVUpDujw&oe=67CCA2FC",
            "spend": "226.14",
            "addToCart": "11",
            "purchases": "5",
            "roas": "5.831432",
            "sourceUrl": "https://www.instagram.com/p/DGivoFtA0dp/"
          }
        ],
        "KPIs": {
          "accountName": "Airback ALL",
          "accountId": "1083076062681667",
          "spend": "19844.4",
          "impressions": "3517600",
          "clicks": "104682",
          "cpc": "0.189568",
          "ctr": "2.97595",
          "purchases": "171",
          "costPerPurchase": "116.049123",
          "conversionValue": "50543.4",
          "addToCart": "1266",
          "costPerAddToCart": "15.674882",
          "initiatedCheckouts": "723",
          "purchaseRoas": "2.546986"
        },
        "campaigns": [
          {
            "campaignName": "VET | TEST GIJS (US UIT 21feb)",
            "spend": "3110.54",
            "purchases": "24",
            "conversionRate": "0.34",
            "purchaseRoas": "2.303831"
          },
          {
            "campaignName": "VET | TESTING | ABO | TOP 10",
            "spend": "3100.15",
            "purchases": "21",
            "conversionRate": "0.23",
            "purchaseRoas": "1.97324"
          },
          {
            "campaignName": "Angelo UGC | Nieuwe landen Campaign (US UIT 21FEB)",
            "spend": "2012.42",
            "purchases": "18",
            "conversionRate": "0.33",
            "purchaseRoas": "2.732461"
          },
          {
            "campaignName": "Nieuwe landen | videos amerika Campaign  Campaign (US STAAT UIT)",
            "spend": "1950.27",
            "purchases": "17",
            "conversionRate": "0.33",
            "purchaseRoas": "2.320622"
          },
          {
            "campaignName": "VET | RET | EU",
            "spend": "1663.7",
            "purchases": "26",
            "conversionRate": "0.34",
            "purchaseRoas": "4.01558"
          },
          {
            "campaignName": "VET | SCALING | Adv+",
            "spend": "1556.07",
            "purchases": "13",
            "conversionRate": "0.13",
            "purchaseRoas": "2.713612"
          },
          {
            "campaignName": "VET | TOP LANDEN | Adv+",
            "spend": "1054.51",
            "purchases": "9",
            "conversionRate": "0.12",
            "purchaseRoas": "2.302747"
          },
          {
            "campaignName": "VET | RET | US",
            "spend": "818.21",
            "purchases": "7",
            "conversionRate": "0.77",
            "purchaseRoas": "3.172853"
          },
          {
            "campaignName": "VET | SHOPPING | Adv+",
            "spend": "637.81",
            "purchases": "3",
            "conversionRate": "0.12",
            "purchaseRoas": "1.498205"
          },
          {
            "campaignName": "VET | RET | APEC",
            "spend": "565.47",
            "purchases": "3",
            "conversionRate": "0.02",
            "purchaseRoas": "1.192813"
          },
          {
            "campaignName": "VET | RET | WORLD",
            "spend": "564.71",
            "purchases": "4",
            "conversionRate": "0.12",
            "purchaseRoas": "1.738839"
          },
          {
            "campaignName": "VET | RET | CA/MX",
            "spend": "502.61",
            "purchases": "3",
            "conversionRate": "0.05",
            "purchaseRoas": "1.434989"
          },
          {
            "campaignName": "VET | TESTING | ABO | FR",
            "spend": "440.24",
            "purchases": "3",
            "conversionRate": "0.14",
            "purchaseRoas": "1.78539"
          },
          {
            "campaignName": "VET | APEC | Adv+",
            "spend": "334.36",
            "purchases": "4",
            "conversionRate": "0.44",
            "purchaseRoas": "2.0064"
          },
          {
            "campaignName": "VET | CA/MX | Adv+",
            "spend": "334.01",
            "purchases": "4",
            "conversionRate": "0.02",
            "purchaseRoas": "2.962247"
          },
          {
            "campaignName": "VET | EU | Adv+",
            "spend": "332.2",
            "purchases": "5",
            "conversionRate": "0.44",
            "purchaseRoas": "4.269386"
          },
          {
            "campaignName": "VET | WORLD | Adv+",
            "spend": "324.92",
            "purchases": "4",
            "conversionRate": "0.23",
            "purchaseRoas": "10.047212"
          },
          {
            "campaignName": "VET | US | SHOPPING | Adv+",
            "spend": "274.27",
            "purchases": "1",
            "conversionRate": "0.31",
            "purchaseRoas": "0.827396"
          },
          {
            "campaignName": "VET | US | SCALING | Adv+",
            "spend": "267.94",
            "purchases": "2",
            "conversionRate": "0.61",
            "purchaseRoas": "2.307606"
          }
        ],
        "graphs": [
          {
            "accountName": "Airback ALL",
            "accountId": "1083076062681667",
            "spend": "3125.47",
            "impressions": "552307",
            "clicks": "16116",
            "cpc": "0.193936",
            "ctr": "2.917942",
            "purchases": "25",
            "costPerPurchase": "125.0188",
            "conversionValue": "6593.54",
            "addToCart": "148",
            "costPerAddToCart": "21.118041",
            "initiatedCheckouts": "99",
            "purchaseRoas": "2.109616",
            "date": "2025-02-25T00:00:00.000Z"
          },
          {
            "accountName": "Airback ALL",
            "accountId": "1083076062681667",
            "spend": "3136.84",
            "impressions": "617155",
            "clicks": "19824",
            "cpc": "0.158234",
            "ctr": "3.212159",
            "purchases": "24",
            "costPerPurchase": "130.701667",
            "conversionValue": "7153.7",
            "addToCart": "206",
            "costPerAddToCart": "15.227379",
            "initiatedCheckouts": "112",
            "purchaseRoas": "2.280543",
            "date": "2025-02-26T00:00:00.000Z"
          },
          {
            "accountName": "Airback ALL",
            "accountId": "1083076062681667",
            "spend": "2601.36",
            "impressions": "480945",
            "clicks": "13252",
            "cpc": "0.196299",
            "ctr": "2.755409",
            "purchases": "19",
            "costPerPurchase": "136.913684",
            "conversionValue": "5285.11",
            "addToCart": "163",
            "costPerAddToCart": "15.959264",
            "initiatedCheckouts": "100",
            "purchaseRoas": "2.031672",
            "date": "2025-02-27T00:00:00.000Z"
          },
          {
            "accountName": "Airback ALL",
            "accountId": "1083076062681667",
            "spend": "2826.98",
            "impressions": "470005",
            "clicks": "12681",
            "cpc": "0.22293",
            "ctr": "2.698056",
            "purchases": "28",
            "costPerPurchase": "100.963571",
            "conversionValue": "10865.39",
            "addToCart": "197",
            "costPerAddToCart": "14.350152",
            "initiatedCheckouts": "106",
            "purchaseRoas": "3.843462",
            "date": "2025-02-28T00:00:00.000Z"
          },
          {
            "accountName": "Airback ALL",
            "accountId": "1083076062681667",
            "spend": "2662.42",
            "impressions": "446891",
            "clicks": "13832",
            "cpc": "0.192483",
            "ctr": "3.095162",
            "purchases": "17",
            "costPerPurchase": "156.612941",
            "conversionValue": "4803.39",
            "addToCart": "173",
            "costPerAddToCart": "15.389711",
            "initiatedCheckouts": "96",
            "purchaseRoas": "1.804144",
            "date": "2025-03-01T00:00:00.000Z"
          },
          {
            "accountName": "Airback ALL",
            "accountId": "1083076062681667",
            "spend": "2877.72",
            "impressions": "472902",
            "clicks": "14449",
            "cpc": "0.199164",
            "ctr": "3.05539",
            "purchases": "21",
            "costPerPurchase": "137.034286",
            "conversionValue": "6130.89",
            "addToCart": "224",
            "costPerAddToCart": "12.846964",
            "initiatedCheckouts": "135",
            "purchaseRoas": "2.130468",
            "date": "2025-03-02T00:00:00.000Z"
          },
          {
            "accountName": "Airback ALL",
            "accountId": "1083076062681667",
            "spend": "2613.62",
            "impressions": "477398",
            "clicks": "14528",
            "cpc": "0.179902",
            "ctr": "3.043163",
            "purchases": "37",
            "costPerPurchase": "70.638378",
            "conversionValue": "9711.38",
            "addToCart": "155",
            "costPerAddToCart": "16.862065",
            "initiatedCheckouts": "75",
            "purchaseRoas": "3.715682",
            "date": "2025-03-03T00:00:00.000Z"
          }
        ]
      };
      // Update component data with reportStats
      this.KPIs = reportStats.KPIs;
      this.graphs = reportStats.graphs;
      this.campaigns = reportStats.campaigns;
      this.bestAds = reportStats.bestAds;
      
      setTimeout(() => {
        this.initializeCharts();
      });
    } catch (error) {
      console.error('Error fetching report stats:', error);
    }
  }

  private initializeCharts() {
    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric'
      });
    };

    const dates = this.graphs.map(g => g.date);
    const formattedDates = dates.map(formatDate);

    // Spend Chart
    new Chart('spendChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Daily Spend',
          data: this.graphs.map(g => parseFloat(g.spend)),
          borderColor: '#3498db'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Daily Ad Spend'
          }
        }
      }
    });

    // ROAS Chart
    new Chart('roasChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'ROAS',
          data: this.graphs.map(g => parseFloat(g.purchaseRoas)),
          borderColor: '#2ecc71'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Return on Ad Spend'
          }
        }
      }
    });

    // Conversion Chart
    new Chart('conversionChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Purchases',
          data: this.graphs.map(g => parseInt(g.purchases)),
          borderColor: '#e74c3c'
        }, {
          label: 'Add to Cart', 
          data: this.graphs.map(g => parseInt(g.addToCart)),
          borderColor: '#f1c40f'
        }, {
          label: 'Checkouts',
          data: this.graphs.map(g => parseInt(g.initiatedCheckouts)),
          borderColor: '#9b59b6'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Conversion Metrics'
          }
        }
      }
    });

    // Engagement Chart
    new Chart('engagementChart', {
      type: 'line', 
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Clicks',
          data: this.graphs.map(g => parseInt(g.clicks)),
          borderColor: '#e67e22'
        }, {
          label: 'Impressions',
          data: this.graphs.map(g => parseInt(g.impressions)),
          borderColor: '#1abc9c'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Engagement Metrics'
          }
        }
      }
    });

    // CTR Chart
    new Chart('ctrChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Click-Through Rate',
          data: this.graphs.map(g => parseFloat(g.ctr)),
          borderColor: '#34495e'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Click-Through Rate'
          }
        }
      }
    });

    // CPC Chart
    new Chart('cpcChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Cost Per Click',
          data: this.graphs.map(g => parseFloat(g.cpc)),
          borderColor: '#16a085'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Cost Per Click'
          }
        }
      }
    });

    // Cost Per Purchase Chart
    new Chart('costPerPurchaseChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Cost Per Purchase',
          data: this.graphs.map(g => parseFloat(g.costPerPurchase)),
          borderColor: '#8e44ad'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Cost Per Purchase'
          }
        }
      }
    });

    // Conversion Value Chart
    new Chart('conversionValueChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Conversion Value',
          data: this.graphs.map(g => parseFloat(g.conversionValue)),
          borderColor: '#c0392b'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Conversion Value'
          }
        }
      }
    });

    // Cost Per Add to Cart Chart
    new Chart('costPerCartChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Cost Per Add to Cart',
          data: this.graphs.map(g => parseFloat(g.costPerAddToCart)),
          borderColor: '#d35400'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Cost Per Add to Cart'
          }
        }
      }
    });

    // Initiated Checkouts Chart
    new Chart('checkoutsChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Initiated Checkouts',
          data: this.graphs.map(g => parseInt(g.initiatedCheckouts)),
          borderColor: '#27ae60'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Initiated Checkouts'
          }
        }
      }
    });
  }
}
