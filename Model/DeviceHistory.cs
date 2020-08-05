using Dapper.Contrib.Extensions;

namespace AlphaSystem
{
  [Table("device_history")]
  public class DeviceHistory
  {
    public int History_id { get; set; }
    public string Action { get; set; }
    public string Operator { get; set; }
    public string Description { get; set; }
  }
}