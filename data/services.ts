import {
  Ship,
  Plane,
  Truck,
  PackageCheck,
  Warehouse,
  FileCheck,
  FileText,
  Briefcase,
  Beaker,
  type LucideIcon,
} from "lucide-react";
import { siteAssets } from "./assets";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  introduction: string;
  image: string;
  icon: LucideIcon;
  benefits: string[];
  capabilities: string[];
  process?: string[];
  disclaimer?: string;
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "clearing-and-forwarding",
    title: "Clearing and Forwarding",
    shortDescription:
      "Coordinate import and export documentation, customs procedures, freight forwarding and door-to-door cargo movement.",
    introduction:
      "Our clearing and forwarding service manages the documents, customs procedures and transport connections needed to move cargo across borders. We work with air, sea, road and rail partners to keep shipments on schedule.",
    image: siteAssets.services.clearingForwarding,
    icon: Ship,
    benefits: [
      "Single point of contact from origin to destination",
      "Documentation, customs and transport coordination",
      "Support for imports, exports and transit cargo",
    ],
    capabilities: [
      "Import and export documentation",
      "Customs procedure coordination",
      "Freight forwarding",
      "Road and railway transportation",
      "Door-to-door cargo movement",
    ],
    process: [
      "Cargo details and route review",
      "Documentation preparation",
      "Customs process coordination",
      "Freight booking and dispatch",
      "Delivery to final destination",
    ],
    relatedServices: [
      "customs-clearance",
      "sea-freight",
      "air-freight",
      "logistics-and-distribution",
    ],
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    shortDescription:
      "End-to-end customs-clearance support, destination guidance, duty-free exemption advice and delivery planning.",
    introduction:
      "Navigating customs requirements can be complex. We help clients prepare accurate documentation, understand destination rules and coordinate clearance so cargo avoids unnecessary delays.",
    image: siteAssets.services.customsClearance,
    icon: FileCheck,
    benefits: [
      "Guidance on import and export requirements",
      "Duty-free exemption guidance where applicable",
      "Port and border coordination",
    ],
    capabilities: [
      "End-to-end customs-clearance support",
      "Destination-requirement guidance",
      "Duty-free exemption guidance",
      "Port coordination",
      "Delivery planning after clearance",
    ],
    process: [
      "Review shipment details and requirements",
      "Prepare and verify customs documents",
      "Lodge declarations and coordinate inspections",
      "Settle applicable charges",
      "Release and dispatch cargo",
    ],
    relatedServices: [
      "clearing-and-forwarding",
      "sea-freight",
      "air-freight",
      "importer-exporter-of-record",
    ],
  },
  {
    slug: "sea-freight",
    title: "Sea Freight",
    shortDescription:
      "Containerized cargo, loose cargo, vehicles and general cargo through Dar es Salaam Port and international destinations.",
    introduction:
      "Sea freight remains one of the most cost-effective ways to move large volumes internationally. We coordinate containerized, loose and vehicle shipments through Dar es Salaam Port and beyond.",
    image: siteAssets.services.seaFreight,
    icon: Ship,
    benefits: [
      "Cost-effective for large or heavy shipments",
      "Containerized, loose and vehicle cargo options",
      "Coordination through Dar es Salaam Port",
    ],
    capabilities: [
      "Containerized cargo",
      "Loose cargo and LCL coordination",
      "Vehicle shipping",
      "Export and import cargo handling",
      "Dar es Salaam Port coordination",
    ],
    process: [
      "Cargo and route assessment",
      "Booking and container allocation",
      "Documentation and customs preparation",
      "Port handling and loading",
      "Arrival clearance and delivery",
    ],
    relatedServices: [
      "clearing-and-forwarding",
      "customs-clearance",
      "loose-cargo",
      "logistics-and-distribution",
    ],
  },
  {
    slug: "air-freight",
    title: "Air Freight",
    shortDescription:
      "International air-cargo coordination for time-sensitive and commercial shipments, including documentation and delivery.",
    introduction:
      "When speed matters, air freight offers reliable transit for urgent and high-value cargo. We coordinate documentation, customs arrangements and final delivery for commercial air shipments.",
    image: siteAssets.services.airFreight,
    icon: Plane,
    benefits: [
      "Faster transit for time-sensitive cargo",
      "Documentation and customs coordination",
      "Final-mile delivery arrangement",
    ],
    capabilities: [
      "International air-cargo coordination",
      "Time-sensitive and commercial shipments",
      "Documentation support",
      "Customs arrangements",
      "Final delivery coordination",
    ],
    process: [
      "Confirm cargo details and deadlines",
      "Select suitable air-freight option",
      "Prepare air-waybill and customs documents",
      "Coordinate airport handling",
      "Clearance and delivery",
    ],
    relatedServices: [
      "customs-clearance",
      "clearing-and-forwarding",
      "logistics-and-distribution",
      "biological-sample-movement",
    ],
  },
  {
    slug: "loose-cargo",
    title: "Loose Cargo and LCL",
    shortDescription:
      "Cost-effective shipping for cargo that does not require a full container. Clients pay according to the volume occupied.",
    introduction:
      "Less-than-container-load (LCL) shipping is ideal when cargo does not fill a full container. Clients pay only for the space their shipment occupies while still benefiting from coordinated handling and clearance.",
    image: siteAssets.services.looseCargo,
    icon: PackageCheck,
    benefits: [
      "Pay only for the space you use",
      "Suitable for smaller shipments",
      "Consolidation and deconsolidation support",
    ],
    capabilities: [
      "Loose cargo consolidation",
      "LCL sea-freight coordination",
      "Volume-based pricing",
      "Cargo receiving and handling",
      "Customs clearance and delivery",
    ],
    process: [
      "Measure and quote by volume",
      "Consolidate with compatible cargo",
      "Prepare shipping and customs documents",
      "Ocean freight movement",
      "Deconsolidation, clearance and delivery",
    ],
    relatedServices: [
      "sea-freight",
      "warehousing",
      "customs-clearance",
      "logistics-and-distribution",
    ],
  },
  {
    slug: "warehousing",
    title: "Warehousing Support",
    shortDescription:
      "Cargo receiving, temporary storage coordination, handling, clearance support and onward transportation scheduling.",
    introduction:
      "We help coordinate warehousing support including cargo receiving, temporary storage, handling and onward transportation planning. Specific warehouse locations and capacities are reviewed individually for each shipment.",
    image: siteAssets.services.warehousing,
    icon: Warehouse,
    benefits: [
      "Cargo receiving and inspection support",
      "Temporary storage coordination",
      "Onward transportation scheduling",
    ],
    capabilities: [
      "Cargo receiving",
      "Temporary storage coordination",
      "Cargo handling",
      "Clearance support",
      "Onward transportation scheduling",
    ],
    disclaimer:
      "Specific warehouse locations, capacity and storage conditions are reviewed individually for each shipment.",
    relatedServices: [
      "loose-cargo",
      "logistics-and-distribution",
      "clearing-and-forwarding",
    ],
  },
  {
    slug: "logistics-and-distribution",
    title: "Logistics and Distribution",
    shortDescription:
      "Transportation of cleared cargo from ports, airports or entry points to the client’s final destination.",
    introduction:
      "Once cargo has cleared customs, our distribution service arranges reliable road transport from ports, airports or border points to the final delivery address.",
    image: siteAssets.services.logisticsDistribution,
    icon: Truck,
    benefits: [
      "Connected delivery after clearance",
      "Road transport coordination",
      "Flexible scheduling to suit your site",
    ],
    capabilities: [
      "Port and airport collections",
      "Road transport coordination",
      "Delivery to client premises",
      "Status updates during transit",
      "Returnable packaging or empties coordination",
    ],
    process: [
      "Confirm delivery location and timing",
      "Arrange suitable road transport",
      "Collect cargo after clearance",
      "In-transit monitoring",
      "Final delivery and confirmation",
    ],
    relatedServices: [
      "clearing-and-forwarding",
      "sea-freight",
      "air-freight",
      "warehousing",
    ],
  },
  {
    slug: "biological-sample-movement",
    title: "Biological Sample Movement",
    shortDescription:
      "Specialized logistics coordination for biological samples, clinical-trial materials and biopharmaceutical cargo moving into or out of Africa.",
    introduction:
      "Moving biological samples and clinical-trial materials requires careful planning and accurate documentation. We coordinate transportation and help clients prepare the shipping and customs documents needed for biopharmaceutical cargo moving into and out of Africa.",
    image: siteAssets.services.biologicalSamples,
    icon: Beaker,
    benefits: [
      "Africa-focused biopharmaceutical logistics support",
      "Documentation and customs guidance",
      "Shipment planning for sensitive cargo",
    ],
    capabilities: [
      "Biological sample transportation coordination",
      "Clinical-trial material logistics support",
      "Biopharmaceutical cargo planning",
      "Import and export documentation assistance",
      "Regulatory requirement guidance",
    ],
    disclaimer:
      "Specific handling, packaging, temperature-control and certification requirements are reviewed individually for each shipment.",
    relatedServices: [
      "air-freight",
      "customs-clearance",
      "logistics-consultancy",
    ],
  },
  {
    slug: "importer-exporter-of-record",
    title: "Importer and Exporter of Record",
    shortDescription:
      "Support for importer-of-record and exporter-of-record requirements, documentation, regulatory coordination and door-to-door delivery.",
    introduction:
      "Importer-of-record and exporter-of-record services help clients meet regulatory requirements when they do not have a direct importing or exporting entity in the destination country. We support documentation, regulatory coordination and delivery planning.",
    image: siteAssets.services.importerExporterOfRecord,
    icon: FileText,
    benefits: [
      "Support when a local entity is not available",
      "Regulatory and documentation coordination",
      "Door-to-door delivery arrangement",
    ],
    capabilities: [
      "Importer-of-record support",
      "Exporter-of-record support",
      "Documentation preparation",
      "Regulatory coordination",
      "Door-to-door delivery",
    ],
    relatedServices: [
      "customs-clearance",
      "clearing-and-forwarding",
      "logistics-and-distribution",
    ],
  },
  {
    slug: "logistics-consultancy",
    title: "Logistics Consultancy",
    shortDescription:
      "Shipment planning, destination research, document preparation, customs-process guidance and logistics-cost reduction.",
    introduction:
      "Our logistics consultancy service helps clients plan shipments, research destination requirements, prepare documents and identify ways to reduce logistics costs without sacrificing reliability.",
    image: siteAssets.services.logisticsConsultancy,
    icon: Briefcase,
    benefits: [
      "Pre-shipment planning and research",
      "Customs-process guidance",
      "Cost-reduction recommendations",
    ],
    capabilities: [
      "Shipment planning",
      "Destination research",
      "Document preparation",
      "Customs-process guidance",
      "Logistics-cost reduction advice",
    ],
    relatedServices: [
      "customs-clearance",
      "sea-freight",
      "air-freight",
      "importer-exporter-of-record",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
