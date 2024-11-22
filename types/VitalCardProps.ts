export interface VitalCardProps {
  label: string; // The label for the vital (e.g., "Heart Rate")
  value?: number | string; // The numeric or string value of the vital
  levels?: string; // The status level (e.g., "Normal", "Lower than Average")
  unit?: string; // Unit for the value (e.g., "bpm", "°F")
  bgColor: string; // Background color class for the card
  iconSrc: string; // Path to the icon image
}
