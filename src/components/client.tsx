"use client";

import { FC } from "react";

export interface ClientProps {
  children: React.ReactNode;
  isClient: boolean;
}
export const client: FC<ClientProps> = () => null;
