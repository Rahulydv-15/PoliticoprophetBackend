import DeviceInfo from "../models/DeviceInfo.js";
export const getDeviceInfo = async (req, res) => {
  try {
    const { deviceType, deviceInfo, ipAddress, latitude, longitude } = req.body;

    const deviceInfoData = new DeviceInfo({
      deviceType,
      deviceInfo,
      ipAddress,
      latitude,
      longitude,
    });

    const savedDeviceInfo = await deviceInfoData.save();
    res.status(200).json(savedDeviceInfo);
  } catch (error) {
    console.error("Error saving DeviceInfo:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the device information" });
  }
};
