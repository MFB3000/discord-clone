"use client";

import { CreateServerModal } from "@/components/modal/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modal/invite-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
};
