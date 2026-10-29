import { model, models, Schema, type Model } from "mongoose";

export interface PostRecord {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<PostRecord>(
  {
    title: { type: String, required: true, trim: true, maxlength: 160 },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    },
    excerpt: { type: String, required: true, trim: true, maxlength: 320 },
    content: { type: String, required: true, trim: true },
    publishedAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true },
);

postSchema.index({ publishedAt: -1 });

const Post: Model<PostRecord> =
  (models.Post as Model<PostRecord> | undefined) ??
  model<PostRecord>("Post", postSchema);

export default Post;