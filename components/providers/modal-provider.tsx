"use client";

import { CreateServerModal } from "@/components/modal/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modal/invite-modal";
import { EditServerModal } from "@/components/modal/edit-server-modal";
import { MemberModal } from "@/components/modal/members-modal";
import { CreateChannelModal } from "@/components/modal/create-channel-modal";
import { LeaveServerModal } from "../modal/leave-server-modal";
import { DeleteServerModal } from "../modal/delete-server-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MemberModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  );
};
