import mongoose from "mongoose";

const DeviceInfoSchema = new mongoose.Schema({
  deviceType: {
    type: String,
    required: true
  },
  deviceInfo: {
    type: Object,
    required: true
  },
  ipAddress: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  }
  ,{ timestamps: true }
});

export default mongoose.model('DeviceInfo', DeviceInfoSchema);

