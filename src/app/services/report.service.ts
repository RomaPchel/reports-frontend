import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface ReportStatsResponse {
    bestAds: BestAd[]
    KPIs: Kpis
    campaigns: Campaign[]
    graphs: Graph[]
  }
  
  export interface BestAd {
    adCreativeId: string
    thumbnailUrl: string
    spend: string
    addToCart: string
    purchases: string
    roas: string
    sourceUrl: string
  }
  
  export interface Kpis {
    accountName: string
    accountId: string
    spend: string
    impressions: string
    clicks: string
    cpc: string
    ctr: string
    purchases: string
    costPerPurchase: string
    conversionValue: string
    addToCart: string
    costPerAddToCart: string
    initiatedCheckouts: string
    purchaseRoas: string
  }
  
  export interface Campaign {
    campaignName: string
    spend: string
    purchases: string
    conversionRate: string
    purchaseRoas: string
  }
  
  export interface Graph {
    accountName: string
    accountId: string
    spend: string
    impressions: string
    clicks: string
    cpc: string
    ctr: string
    purchases: string
    costPerPurchase: string
    conversionValue: string
    addToCart: string
    costPerAddToCart: string
    initiatedCheckouts: string
    purchaseRoas: string
    date: string
  }
  

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  // private apiUrl = 'http://localhost:3000';
  private apiUrl = 'https://0758-77-174-130-35.ngrok-free.app';

  private headers = {
    'ngrok-skip-browser-warning': 'true'
  }

  constructor(private http: HttpClient) { }

  async getReportStats(datePreset: string): Promise<ReportStatsResponse> {
    return firstValueFrom(this.http.get<ReportStatsResponse>(`${this.apiUrl}/report?datePreset=${datePreset}`, {headers: this.headers}));
  }

  async getWeeklyReportById(id: string): Promise<ReportStatsResponse> {
    return firstValueFrom(this.http.get<ReportStatsResponse>(`${this.apiUrl}/report/${id}`, {headers: this.headers}));
  }
}