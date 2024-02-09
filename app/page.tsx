import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/blogs");
}
