"use client";
import React from "react";
import Reply from "./Reply";
import Comment from "./Comment";
import { PostOwnnerProps } from "@/libs/types";

export default function PostOwnner({userlmagePath,username,commentText,likenum,repies}:PostOwnnerProps) {
  const replies = [
    { ImagePath: "", username: "user1", replyTitle: "Reply 1", likes: 10 },
    { ImagePath: "", username: "user2", replyTitle: "Reply 2", likes: 5 },
  ];
  return <div><div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src="/profileImages/S__61751307.jpg"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">Apicha Lerdjintanakit 660612162</span>
  </div>

  <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>

  <div className="d-flex align-items-center gap-1">
    <img src="/like.svg" width={20}></img>
    <span className="text-muted">100 คน</span>
  </div>
  <hr className="m-0 border" />
</div></div>;

}
