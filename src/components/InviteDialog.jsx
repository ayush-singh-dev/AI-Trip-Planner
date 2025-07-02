import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Send, Share2Icon } from "lucide-react";
import { useState } from 'react';

const InviteDialog = ({tripid}) => {
    const inviteLink = `${
      typeof window !== "undefined" ? window.location.origin : ""
    }/join-trip/${tripid}`;
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(inviteLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    };

    const handleWhatsAppShare = () => {
      const message = `Hey! Join my trip here: ${inviteLink}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" coursor-pointer">
            <Share2Icon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Trip Invitation</DialogTitle>
            <DialogDescription>
              Share this link to invite your friends to the trip.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center space-x-2 mt-4">
            <input
              readOnly
              value={inviteLink}
              className="flex-1 px-3 py-2 rounded-md border text-sm"
            />
            <Button variant="outline" onClick={handleCopy}>
              <Copy className="w-4 h-4 mr-1" />
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>

          <Button
            onClick={handleWhatsAppShare}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white w-full"
          >
            <Send className="w-4 h-4 mr-2" />
            Share via WhatsApp
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default InviteDialog