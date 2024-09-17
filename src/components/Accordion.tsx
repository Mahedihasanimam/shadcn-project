'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";

const Accordion = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className=" ">
          <Button className="shadow-blue-400  shadow-lg px-6 py-2 rounded-md " variant={"secondary"}>Click Me</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white text-black dark:bg-gradient-to-l from-blue-500  to-blue-200 dark:text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Accordion;
