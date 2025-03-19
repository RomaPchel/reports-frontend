import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BestAd, Campaign, Graph, Kpis, ReportService } from '../../services/report.service';
import { ActivatedRoute } from '@angular/router';

import ChartDataLabels from 'chartjs-plugin-datalabels';


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

  reportStatsLoading = false;

  datePresets = [
    { value: 'today', text: 'Today' },
    { value: 'yesterday', text: 'Yesterday' },
    { value: 'this_month', text: 'This Month' },
    { value: 'last_month', text: 'Last Month' },
    { value: 'this_quarter', text: 'This Quarter' },
    { value: 'maximum', text: 'Maximum' },
    { value: 'data_maximum', text: 'Data Maximum' },
    { value: 'last_3d', text: 'Last 3 Days' },
    { value: 'last_7d', text: 'Last 7 Days' },
    { value: 'last_14d', text: 'Last 14 Days' },
    { value: 'last_28d', text: 'Last 28 Days' },
    { value: 'last_30d', text: 'Last 30 Days' },
    { value: 'last_90d', text: 'Last 90 Days' },
    { value: 'last_week_mon_sun', text: 'Last Week (Mon-Sun)' },
    { value: 'last_week_sun_sat', text: 'Last Week (Sun-Sat)' },
    { value: 'last_quarter', text: 'Last Quarter' },
    { value: 'last_year', text: 'Last Year' },
    { value: 'this_week_mon_today', text: 'This Week (Mon-Today)' },
    { value: 'this_week_sun_today', text: 'This Week (Sun-Today)' },
    { value: 'this_year', text: 'This Year' }
  ];

  selectedDatePreset = "last_7d";
  selectedDatePresetText = "Last 7 Days";

  constructor(
    private reportService: ReportService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnChanges() {
    // Update selectedDatePresetText when selectedDatePreset changes
    const preset = this.datePresets.find(p => p.value === this.selectedDatePreset);
    if (preset) {
      this.selectedDatePresetText = preset.text;
    }
  }

  async ngOnInit() {

    const reportId = this.route.snapshot.params['id'];

    if (reportId) {
      this.updateReportStats(reportId);
    }

    try {
      // const reportStats = await this.reportService.getReportStats();
      const reportStats = {
        "bestAds": [
            {
                "adCreativeId": "2189365538147179",
                "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/482422647_1286213389104987_4095784446547550610_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=gYmDbxzXrLcQ7kNvgFJLOEJ&_nc_oc=AdgdQsvKvsH7pS2ewRNoaUx60Dqci_EPOOEnpAHJkcGgRNroqMgx3lz15P1wsKCbw8oZnk-1AlxrbRkpt-Hd9aIP&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYEiLe93lVwiPxi61JtcHA3ZAf4sJ73MCGQBtTo0L-DJoQ&oe=67D9BF7D",
                "spend": "8.06",
                "addToCart": "5",
                "purchases": "1",
                "roas": "35.573201",
                "sourceUrl": "https://www.instagram.com/p/DGnpldFgcBw/"
            },
            {
                "adCreativeId": "654372043937341",
                "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.66404-15/482211611_530461443431732_2756211085979181376_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=tmITJixd0E8Q7kNvgGpaX0r&_nc_oc=Adgk726hzLYNSuw3byn2aVgeP6Wjjc6F5secO_s9CGJSPUbAfEBTDJ2pCxHiqTu65vISo27yEumKZr5JUI8IBFlK&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&_nc_gid=A1kLxphdiIHZOjKr7-CFy_x&oh=00_AYGy2MkSVMrrMMMOjmI7OO_LZb1xzCgFJmB_zQJOI1h3hA&oe=67D9B524",
                "spend": "10.82",
                "addToCart": "9",
                "purchases": "1",
                "roas": "34.721811",
                "sourceUrl": "https://www.instagram.com/p/DG5fUbpAGWC/"
            },
            {
                "adCreativeId": "987607223315046",
                "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/481468300_644631508508263_7228676733588715195_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=WabBYJ1kRpIQ7kNvgGHFPZZ&_nc_oc=AdjxEzpA5kd__ank3MzEiI5-6OqmKJ6Bc09NPC6lpvXyG8NiJr99cc4flhAyl8umeB0zokFrUvpcrBbo3EcOAEs2&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYHpjpSo--bMzSzMn7ua6XkXsXpz_stoGjaLSE3dyhdzFw&oe=67D9B6E8",
                "spend": "18.93",
                "addToCart": "3",
                "purchases": "1",
                "roas": "25.182779",
                "sourceUrl": "https://www.instagram.com/p/DGirKkMgZfF/"
            },
            {
                "adCreativeId": "609975474954490",
                "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.66404-15/482904381_1671022223792546_9080717342090812706_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=CkA6QSSjyzMQ7kNvgHVSCfp&_nc_oc=AdgnSX9zOF5qSjMIz4AkeRF2LCg417dPzKcJLesaXUjngAW2dVnLWttlcg4VDfLGGgbNWeGOH0d5Rq1ZoRFeCjii&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&_nc_gid=ALyD0ai4lqmnKesqvzvx8I-&oh=00_AYH_Z61Z84ucJAF-RbfeDkxpiL9Up0t-eIPEbAn5bKYFKg&oe=67D9BE4F",
                "spend": "70.74",
                "addToCart": "11",
                "purchases": "2",
                "roas": "15.704269",
                "sourceUrl": "https://www.instagram.com/p/DGdxqbWg906/"
            },
            {
                "adCreativeId": "659575426585589",
                "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.66404-15/477019737_651436607534405_2724756208619632648_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=Fl73vJnL0I8Q7kNvgG3nVHG&_nc_oc=AdjaAG2aCkCgG-oVkNnv8wWLT6PslmJc6E-X4N5oBci-6gT5lpHgDORaM01VyUSk5DTUg-khl5rXT2Yj_1vartvv&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&_nc_gid=KDh8ZCOs-9EkJwMRYDIAKQ&oh=00_AYHPGj8K_9F1mjMbE9yENj_VbIBYA-rxdgSErhz781imDQ&oe=67D9A1C3",
                "spend": "28.7",
                "addToCart": "2",
                "purchases": "2",
                "roas": "15.179791",
                "sourceUrl": "https://www.instagram.com/p/DGV0sEggdG5/"
            },
            {
                "adCreativeId": "1546570426015714",
                "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/482798202_1630912474203681_9065245098768009247_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=_4nx8ULrR9wQ7kNvgFfv-hY&_nc_oc=Adje9gDjEQHvdnrH8RGm20wWGVj_PraxWvuKSY2FPlu44-op6p4JVJt9E2KWQyygf_9MEvs9RCvB0m7YHxdRg5M6&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYF8JgdYqtWnfJWCfP4oAdiT26v8I4MMAp3AYfgINnAz3w&oe=67D98EFF",
                "spend": "26.58",
                "addToCart": "1",
                "purchases": "1",
                "roas": "14.07073",
                "sourceUrl": "https://www.instagram.com/p/DG5fT79gNdu/"
            },
            {
                "adCreativeId": "612668914819561",
                "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/475600282_1411256569838872_640798531603928819_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=FqQmwzXJiCAQ7kNvgF8dCYt&_nc_oc=AdgcIlVUs8H9xHk96WSox1poVb_-eWzmAv1nQA7LoXe5GihqOQ1TzU5Zc_BJTt2il_DQhTLMAbnXp1aXIrQ_ij2F&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYEAhelYG-2XMBm2OIkgVJMzX16ZRdiLXYoLkTCGIICnqw&oe=67D9B14E",
                "spend": "44.06",
                "addToCart": "3",
                "purchases": "1",
                "roas": "10.192919",
                "sourceUrl": "https://www.instagram.com/p/DGirKsCgaH1/"
            },
            {
                "adCreativeId": "1005116964833096",
                "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/483756951_657081693472066_4968697456504998694_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=Gx1WgVf9mqEQ7kNvgFtZ6AJ&_nc_oc=Adjsq_p5hD7EOqKF4H0psnXwmZFoKeAuH3U7Pu8JYH6NvePOR0HQPjH2ICp8NOxxXtX0EMbxgg0bLke_6QPL6f72&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYHAPgeKCveCAhkElF2i243lE9t90X0zVbzS9-FRO1ssSw&oe=67D9B5A6",
                "spend": "84.57",
                "addToCart": "8",
                "purchases": "3",
                "roas": "9.9313",
                "sourceUrl": "https://www.instagram.com/p/DG5fVutA4kK/"
            },
            {
                "adCreativeId": "988259656702550",
                "thumbnailUrl": "https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/482372174_654982767186127_606361572605316567_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=8wl2TQrhWBUQ7kNvgGuacic&_nc_oc=AdixtLenWD-tzB3ux8yuMuZvJPUX44_55tioJjAPOxrZAavdV9h8M8Jpk6cdNMmAoMGOMmea0ggQCzk2GtNEk4iY&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYFOJ0f-I5DnU_DNKNZ1TJRcDLEkmJllToz_g6z-N7Mq4A&oe=67D9BC01",
                "spend": "29.52",
                "addToCart": "6",
                "purchases": "1",
                "roas": "9.601965",
                "sourceUrl": "https://www.instagram.com/p/DGvbxITA0dF/"
            },
            {
                "adCreativeId": "2011722892666920",
                "thumbnailUrl": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/482769799_2974537682722736_8739707751552030285_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=RvuI9jsZ0vwQ7kNvgGfylGu&_nc_oc=AditqMerEWIYjt-5CtO4cixAnJxIypApsfor7SpEL2ru_oEBc69KiXOjslSlgqmiYY3peOm5tX9ey8mjxYdsj7hN&_nc_zt=23&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AYFjQdKFyspOizIjFCwp9sxfaqkVQjcFS4eZ5uluO8VK7Q&oe=67D9BEFC",
                "spend": "22.53",
                "addToCart": "3",
                "purchases": "1",
                "roas": "8.748336",
                "sourceUrl": "https://www.instagram.com/p/DGvbxKogGkd/"
            }
        ],
        "KPIs": {
            "accountName": "Airback ALL",
            "accountId": "1083076062681667",
            "spend": "22073.23",
            "impressions": "3094234",
            "clicks": "78058",
            "cpc": "0.28278",
            "ctr": "2.522692",
            "purchases": "149",
            "costPerPurchase": "148.142483",
            "conversionValue": "42012.77",
            "addToCart": "1312",
            "costPerAddToCart": "16.824108",
            "initiatedCheckouts": "722",
            "purchaseRoas": "1.903336"
        },
        "campaigns": [
            {
                "campaignName": "campaign 1",
                "spend": "5238.17",
                "purchases": "33",
                "conversionRate": "0.30",
                "purchaseRoas": "1.814924"
            },
            {
                "campaignName": "campaign 2",
                "spend": "2679.05",
                "purchases": "25",
                "conversionRate": "0.30",
                "purchaseRoas": "2.470476"
            },
            {
                "campaignName": "campaign 3",
                "spend": "2479.11",
                "purchases": "17",
                "conversionRate": "0.26",
                "purchaseRoas": "1.802207"
            },
            {
                "campaignName": "campaign 4",
                "spend": "2045.18",
                "purchases": "17",
                "conversionRate": "0.36",
                "purchaseRoas": "2.042867"
            },
            {
                "campaignName": "campaign 5",
                "spend": "1320.39",
                "purchases": "6",
                "conversionRate": "0.26",
                "purchaseRoas": "1.024008"
            },
            {
                "campaignName": "campaign 6",
                "spend": "1275.5",
                "purchases": "10",
                "conversionRate": "0.28",
                "purchaseRoas": "2.461082"
            },
            {
                "campaignName": "campaign 7",
                "spend": "1110.32",
                "purchases": "7",
                "conversionRate": "0.12",
                "purchaseRoas": "2.24646"
            },
            {
                "campaignName": "campaign 8",
                "spend": "1069.51",
                "purchases": "5",
                "conversionRate": "0.40",
                "purchaseRoas": "0.934465"
            },
            {
                "campaignName": "campaign 9",
                "spend": "903.37",
                "purchases": "9",
                "conversionRate": "0.25",
                "purchaseRoas": "3.584279"
            },
            {
                "campaignName": "campaign 10",
                "spend": "796.58",
                "purchases": "3",
                "conversionRate": "0.01",
                "purchaseRoas": "0.660486"
            },
            {
                "campaignName": "campaign 11",
                "spend": "705.68",
                "purchases": "2",
                "conversionRate": "0.13",
                "purchaseRoas": "0.727157"
            },
            {
                "campaignName": "campaign 12",
                "spend": "689.37",
                "purchases": "3",
                "conversionRate": "0.24",
                "purchaseRoas": "0.939379"
            },
            {
                "campaignName": "campaign 13",
                "spend": "577.96",
                "purchases": "2",
                "conversionRate": "0.07",
                "purchaseRoas": "0.90335"
            },
            {
                "campaignName": "campaign 14",
                "spend": "394.96",
                "purchases": "4",
                "conversionRate": "0.14",
                "purchaseRoas": "5.156801"
            },
            {
                "campaignName": "campaign 15",
                "spend": "344.67",
                "purchases": "3",
                "conversionRate": "0.29",
                "purchaseRoas": "1.324252"
            },
            {
                "campaignName": "campaign 16",
                "spend": "293.19",
                "purchases": "3",
                "conversionRate": "1.11",
                "purchaseRoas": "4.490365"
            },
            {
                "campaignName": "campaign 17",
                "spend": "108.05",
                "purchases": "0",
                "conversionRate": "0.00",
                "purchaseRoas": "0"
            },
            {
                "campaignName": "campaign 18",
                "spend": "42.17",
                "purchases": "0",
                "conversionRate": "0.00",
                "purchaseRoas": "0"
            },
            {
                "campaignName": "campaign 19",
                "spend": "0",
                "purchases": "0",
                "conversionRate": "NaN",
                "purchaseRoas": "0"
            }
        ],
        "graphs": [
            {
                "accountName": "Airback ALL",
                "accountId": "1083076062681667",
                "spend": "2937.66",
                "impressions": "471085",
                "clicks": "16174",
                "cpc": "0.181629",
                "ctr": "3.433351",
                "purchases": "20",
                "costPerPurchase": "146.883",
                "conversionValue": "5066.23",
                "addToCart": "198",
                "costPerAddToCart": "14.836667",
                "initiatedCheckouts": "126",
                "purchaseRoas": "1.72458",
                "date": "2025-03-07T00:00:00.000Z"
            },
            {
                "accountName": "Airback ALL",
                "accountId": "1083076062681667",
                "spend": "3033.44",
                "impressions": "407848",
                "clicks": "11741",
                "cpc": "0.258363",
                "ctr": "2.878769",
                "purchases": "21",
                "costPerPurchase": "144.449524",
                "conversionValue": "6090.87",
                "addToCart": "185",
                "costPerAddToCart": "16.396973",
                "initiatedCheckouts": "110",
                "purchaseRoas": "2.007909",
                "date": "2025-03-08T00:00:00.000Z"
            },
            {
                "accountName": "Airback ALL",
                "accountId": "1083076062681667",
                "spend": "3567.08",
                "impressions": "452928",
                "clicks": "11472",
                "cpc": "0.310938",
                "ctr": "2.532853",
                "purchases": "36",
                "costPerPurchase": "99.085556",
                "conversionValue": "9703.43",
                "addToCart": "220",
                "costPerAddToCart": "16.214",
                "initiatedCheckouts": "121",
                "purchaseRoas": "2.720273",
                "date": "2025-03-09T00:00:00.000Z"
            },
            {
                "accountName": "Airback ALL",
                "accountId": "1083076062681667",
                "spend": "3301.11",
                "impressions": "484865",
                "clicks": "11538",
                "cpc": "0.286108",
                "ctr": "2.379631",
                "purchases": "21",
                "costPerPurchase": "157.195714",
                "conversionValue": "6408.61",
                "addToCart": "195",
                "costPerAddToCart": "16.928769",
                "initiatedCheckouts": "98",
                "purchaseRoas": "1.94135",
                "date": "2025-03-10T00:00:00.000Z"
            },
            {
                "accountName": "Airback ALL",
                "accountId": "1083076062681667",
                "spend": "3142.96",
                "impressions": "436000",
                "clicks": "8775",
                "cpc": "0.358172",
                "ctr": "2.012615",
                "purchases": "21",
                "costPerPurchase": "149.664762",
                "conversionValue": "6757.08",
                "addToCart": "196",
                "costPerAddToCart": "16.03551",
                "initiatedCheckouts": "97",
                "purchaseRoas": "2.14991",
                "date": "2025-03-11T00:00:00.000Z"
            },
            {
                "accountName": "Airback ALL",
                "accountId": "1083076062681667",
                "spend": "3304.36",
                "impressions": "472990",
                "clicks": "10001",
                "cpc": "0.330403",
                "ctr": "2.114421",
                "purchases": "17",
                "costPerPurchase": "194.374118",
                "conversionValue": "4143.29",
                "addToCart": "153",
                "costPerAddToCart": "21.597124",
                "initiatedCheckouts": "91",
                "purchaseRoas": "1.253886",
                "date": "2025-03-12T00:00:00.000Z"
            },
            {
                "accountName": "Airback ALL",
                "accountId": "1083076062681667",
                "spend": "2786.62",
                "impressions": "368518",
                "clicks": "8357",
                "cpc": "0.333447",
                "ctr": "2.267732",
                "purchases": "13",
                "costPerPurchase": "214.355385",
                "conversionValue": "3843.26",
                "addToCart": "165",
                "costPerAddToCart": "16.888606",
                "initiatedCheckouts": "79",
                "purchaseRoas": "1.379183",
                "date": "2025-03-13T00:00:00.000Z"
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

  async updateReportStats(reportId?: string) {
    this.reportStatsLoading = true; 
    const start = performance.now();
    if (reportId) {
      ({ KPIs: this.KPIs, graphs: this.graphs, campaigns: this.campaigns, bestAds: this.bestAds } = await this.reportService.getWeeklyReportById(reportId));
    }
    else {
      ({ KPIs: this.KPIs, graphs: this.graphs, campaigns: this.campaigns, bestAds: this.bestAds } = await this.reportService.getReportStats(this.selectedDatePreset));
    }
    const end = performance.now();
    console.log(`getReportStats execution time: ${end - start}ms`);
    this.reportStatsLoading = false;
    this.ref.detectChanges();
    setTimeout(() => {
      this.initializeCharts();
    });
  }

  startDate: string = '';
  endDate: string = '';

  onDateChange(event: string, type: 'start' | 'end') {
    if (type === 'start') {
      this.startDate = event;
    } else {
      this.endDate = event;
    }

    console.log(this.startDate, this.endDate);

    // Only update if both dates are set
    if (this.startDate && this.endDate) {
      // Validate date range
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      
      if (start > end) {
        // Handle invalid date range
        if (type === 'start') {
          this.startDate = this.endDate;
        } else {
          this.endDate = this.startDate;
        }
        return;
      }

      // Update report with new date range
      // this.updateReportStats();
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

    Chart.register(ChartDataLabels); // Register the plugin globally

    
    // this.initializeSpendChart(
    //   'spendChart', 
    //   'Daily Spend', 
    //   'Daily Ad Spend', 
    //   this.graphs.map(g => parseFloat(g.spend)), 
    //   formattedDates,
    //   'rgba(52, 152, 219, 1)'
    // );
    
    new Chart('spendChart', {
      type: 'line',
      data: {
        labels: formattedDates,
        datasets: [{
          label: 'Daily Spend',
          data: this.graphs.map(g => parseFloat(g.spend)),
          borderColor: '#ad96f2',
          // backgroundColor: 'rgba(52, 152, 219, 0.1)',
          borderWidth: 2,
          // fill: true,
          tension: 0.3,
          pointRadius: 2.5,
          pointBackgroundColor: '#ad96f2',
          pointBorderColor: '#fff',
          pointBorderWidth: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#ad96f2',
          pointHoverBorderColor: '#ad96f2',
          pointHoverBorderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Daily Ad Spend',
            font: {
              size: 16,
              weight: 'bold',
              family: "'Inter Variable', sans-serif"
            },
            padding: 20
          },
          legend: {
            display: false,
            labels: {
              font: {
                size: 12,
                family: "'Inter Variable', sans-serif"
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            titleColor: '#333',
            bodyColor: '#333',
            borderColor: '#ad96f2',
            borderWidth: 1.5,
            cornerRadius: 8,
            padding: 15,
            displayColors: false,
            titleFont: {
              family: "'Inter Variable', sans-serif"
            },
            bodyFont: {
              family: "'Inter Variable', sans-serif"
            },
            callbacks: {
              label: function(context) {
                return `$ ${context.parsed.y.toFixed(2)}`;
              }
            }
          },
          // ADD DATALABELS CONFIGURATION HERE
          datalabels: {
            display: false,
            anchor: 'end', // Position the label at the end of the point
            align: 'bottom',  // Align the label to the top of the point
            offset: 8,     // Add some offset for better spacing
            font: {
              size: 10,
              family: "'Inter Variable', sans-serif"
              // weight: 'bold'
            },
            color: '#333', // Label text color
            formatter: function(value, context) { // Format the label value
              return '$ ' + value.toFixed(0); // Display with dollar sign and 2 decimal places
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: true,
              color: 'rgba(0, 0, 0, 0.03)',
            },
            ticks: {
              font: {
                size: 11,
                family: "'Inter Variable', sans-serif"
              }
            }
          },
          y: {
            beginAtZero: false,
            grid: {
              color: 'rgba(0, 0, 0, 0.03)'
            },
            ticks: {
              count: 4,
              font: {
                size: 11,
                family: "'Inter Variable', sans-serif"
              },
              callback: function(value) {
                return '$ ' + Number(value).toFixed(0);
              }
            },
            afterDataLimits: (scale) => {
              const range = scale.max - scale.min;
              scale.max += range * 0.2;
              scale.min -= range * 0.4;
            }
          }
        },
      }
    });

    // Spend Chart
    

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
        // maintainAspectRatio: false,
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
