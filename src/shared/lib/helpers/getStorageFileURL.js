import { appSettings } from "@/app/const/settings.js";

export function getStorageFileURL(bucket, key) {
  return `${appSettings.S3_STORAGE_BASE_URL}${bucket}/${key}`;
}
