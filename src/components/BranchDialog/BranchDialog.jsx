"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { TbMap2 } from "react-icons/tb";
import { Label } from "../ui/label";
import { toast } from "sonner";

const BranchDialog = () => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Branches</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center gap-3 w-full">
        <TbMap2 size={50} />
        <h4 className="text-xl font-medium">Select Branch</h4>
      </div>
      <div className="mt-5">
        <Label className="mb-3">Select branch</Label>
        <Select defaultValue="rajshahi-branch">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Branches</SelectLabel>
              <SelectItem value="rajshahi-branch">Dummy - Rajshahi Branch</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-5">
        <Label className="mb-3">Select Delivery area</Label>
        <Select defaultValue="vodra">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Delivery area" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>ares</SelectLabel>
              <SelectItem value="vodra">Vodra</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">CLOSE</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button onClick={() => toast.success("Location Updated")}>SAVE</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default BranchDialog;
