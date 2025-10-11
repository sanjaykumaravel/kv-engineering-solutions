"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type ExampleProps = {
  initial?: string;
};

export default function Example({ initial = "" }: ExampleProps) {
  const [value, setValue] = useState<string>(initial);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app you'd call an API here. We'll just log.
    // eslint-disable-next-line no-console
    console.log('Submitted:', value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Component</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">Example input</label>
            <Input value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} placeholder="Type something" />
          </div>

          <div className="flex items-center justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
