using Dapper.Contrib.Extensions;

namespace AlphaSystem
{
  [Table("device_main")]
  public class Device
  {
    [Key]
    public int Device_id { get; set; }
    public string Device_number { get; set; }
    public string Device_name { get; set; }
    public string Type { get; set; }
    public string Brand { get; set; }
    public string Original_feature { get; set; }
    public string Order_date { get; set; }
    public string Deliver_date { get; set; }
    public string Website { get; set; }
    public string Order_reason { get; set; }
    public int Order_price { get; set; }
    public string Order_currency { get; set; }
    public string Order_invoice_no { get; set; }
    public string Order_approved_by { get; set; }
    public string Locate_no { get; set; }
    public string Locate_staff { get; set; }
    public string Device_ip { get; set; }
    public string Device_access_type { get; set; }
    public string Stock_amount { get; set; }
    public string Memo { get; set; }
    public int Order_person { get; set; }
  }
}