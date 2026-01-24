"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WeeklyFiltersClient(props: {
  stores: Array<{ id: string; name: string }>;
  storeId: string;
  weekStartISO: string;
}) {
  const router = useRouter();
  const [storeId, setStoreId] = useState(props.storeId);
  const [weekStart, setWeekStart] = useState(props.weekStartISO);

  function apply(nextStoreId: string, nextWeekStart: string) {
    const params = new URLSearchParams();
    if (nextStoreId) params.set("storeId", nextStoreId);
    if (nextWeekStart) params.set("weekStart", nextWeekStart);
    router.push(`/reports/weekly?${params.toString()}`);
  }

  return (
    <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap", alignItems: "center" }}>
      <label>
        Store:&nbsp;
        <select
          value={storeId}
          onChange={(e) => {
            const v = e.target.value;
            setStoreId(v);
            apply(v, weekStart);
          }}
        >
          <option value="ALL">All Stores</option>
          {props.stores.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Week Start:&nbsp;
        <input
          type="date"
          value={weekStart}
          onChange={(e) => {
            const v = e.target.value;
            setWeekStart(v);
            apply(storeId, v);
          }}
        />
      </label>
    </div>
  );
}
