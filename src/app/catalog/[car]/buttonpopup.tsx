'use client'
import Script from "next/script";
import { useEffect } from "react";
import { openFormPop } from "@/app/utils";

export default function ButtonPopup() {
  return (
    <div>
      <button onClick={openFormPop} className="button btn_card">
        Заказать авто
      </button>
    </div>
  );
}