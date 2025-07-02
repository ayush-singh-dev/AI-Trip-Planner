// components/JoinTripModal.jsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


const JoinTripModal = ({ open, onJoin, onCancel }) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader className="text-xl font-bold">
          Join This Trip?
        </DialogHeader>
        <p>You're about to join this trip. Do you want to continue?</p>
        <DialogFooter className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onJoin}>Join</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JoinTripModal;
