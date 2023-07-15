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

export const getCountAndInfoUsers = async (req, res) => {
  try {
    const deviceInfo = await DeviceInfo.find()
      .limit(50)
      .select("ipAddress latitude longitude createdAt");

    const totalCount = await DeviceInfo.countDocuments();
    const uniqueCount = await DeviceInfo.aggregate([
      { $group: { _id: "$ipAddress" } },
      { $group: { _id: null, count: { $sum: 1 } } }
    ]);

    const data = {
      totalCount,
      uniqueCount: uniqueCount.length > 0 ? uniqueCount[0].count : 0,
      deviceInfo
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error retrieving DeviceInfo:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the device information" });
  }
};
