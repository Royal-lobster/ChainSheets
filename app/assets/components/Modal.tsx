"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { IconX } from "@tabler/icons-react";
import React from "react";
import { button } from "../lib/helpers/variants";

type DialogProps = {
  title: string;
  trigger?: React.ReactNode;
  description?: string;
  primaryAction?: () => void;
  secondaryAction?: () => void;
  primaryActionText?: string;
  secondaryActionText?: string;
  children: React.ReactNode;
};

const Modal = ({
  title,
  trigger,
  description,
  primaryAction,
  primaryActionText,
  secondaryAction,
  secondaryActionText,
  children,
}: DialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 bg-black opacity-30" />
        <Dialog.Content className="fixed w-[90vw] lg:w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col bg-neutral-100 border border-neutral-200 rounded-lg shadow-lg p-6">
          <div className="flex justify-between w-full items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <Dialog.Close
              className={button({ type: "link", class: "m-0 p-0" })}
            >
              <IconX size={20} />
            </Dialog.Close>
          </div>
          <p className="text-neutral-600 mb-4">{description}</p>
          <div className="w-full">{children}</div>
          <div className="flex justify-end">
            {secondaryAction && (
              <button
                className={button({ type: "outline" })}
                onClick={secondaryAction}
              >
                {secondaryActionText}
              </button>
            )}
            {primaryAction && (
              <button className={button()} onClick={primaryAction}>
                {primaryActionText}
              </button>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
