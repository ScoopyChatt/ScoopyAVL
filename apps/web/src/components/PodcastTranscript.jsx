import React from 'react';
import { Download, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jsPDF } from 'jspdf';
import { toast } from 'sonner';

const transcriptData = [
  { time: "00:00", text: "Welcome to the show. Today we have Brandon Carter, founder of Scoopy Doo LLC." },
  { time: "02:15", text: "Brandon: Thank you for having me. Scoopy Doo started when my daughter Leighton and I realized there was a huge gap in the market for professional pet waste removal in Asheville." },
  { time: "05:30", text: "Host: What are the hidden health risks of leaving pet waste in the yard?" },
  { time: "06:00", text: "Brandon: Many people don't realize that pet waste is not fertilizer. It's highly acidic, which is why it burns your lawn. More importantly, it carries harmful bacteria and parasites like E. coli, salmonella, and roundworms that can affect both pets and children playing in the yard." },
  { time: "12:45", text: "Host: What sets your professional service apart from DIY yard cleanup?" },
  { time: "13:10", text: "Brandon: Consistency and sanitization. We use a meticulous grid-walking technique to ensure we never miss a spot. Plus, we sanitize all our equipment between properties to guarantee we aren't tracking any potential diseases from one yard to another." },
  { time: "18:20", text: "Host: It's incredible to see how a simple service can give families their weekends back. Thank you, Brandon." }
];

const PodcastTranscript = () => {
  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.text("Scoopy Doo LLC - Podcast Transcript", 20, 20);
      
      doc.setFontSize(12);
      doc.setTextColor(100);
      doc.text("Founder Brandon Carter on Pet Waste Management", 20, 30);
      
      doc.setFontSize(10);
      doc.setTextColor(0);
      
      let yPosition = 45;
      
      transcriptData.forEach((item) => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.setFont(undefined, 'bold');
        doc.text(`[${item.time}]`, 20, yPosition);
        
        doc.setFont(undefined, 'normal');
        const splitText = doc.splitTextToSize(item.text, 160);
        doc.text(splitText, 35, yPosition);
        
        yPosition += (splitText.length * 6) + 4;
      });
      
      doc.save("Scoopy-Doo-Podcast-Transcript.pdf");
      toast.success("Transcript downloaded successfully.");
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("Failed to generate PDF. Please try again later.");
    }
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
      <div className="p-6 sm:p-8 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Episode Transcript</h3>
          <p className="text-muted-foreground mt-1">Detailed summary and key timestamps</p>
        </div>
        <Button onClick={handleDownloadPDF} variant="outline" className="shrink-0 flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Download as PDF
        </Button>
      </div>
      
      <div className="p-6 sm:p-8 space-y-6">
        {transcriptData.map((item, index) => (
          <div key={index} className="flex gap-4 items-start group">
            <div className="shrink-0 flex items-center justify-center bg-muted text-muted-foreground font-mono text-xs px-2 py-1 rounded-md mt-1">
              <Clock className="w-3 h-3 mr-1" />
              {item.time}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastTranscript;