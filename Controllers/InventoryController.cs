using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;

namespace AlphaSystem.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class InventoryController : ControllerBase
  {
    private readonly ILogger<InventoryController> _logger;
    private readonly string maxDb = "Server=localhost;Database=max_devices;Uid=root;Password=Cf222222;";

    public InventoryController(ILogger<InventoryController> logger)
    {
      _logger = logger;
    }

    [HttpGet("devices")]
    public IEnumerable<Device> GetDevices()
    {
      using var connection = new MySqlConnection(maxDb);
      var data = connection.GetAll<Device>();
      return data;
    }

    [HttpGet("history/{device_id}")]
    public IEnumerable<History> GetHistory(int device_id)
    {
      using var connection = new MySqlConnection(maxDb);
      var data = connection.Query<History>($"SELECT * FROM device_history WHERE  device_id = @id", new { id = device_id });
      return data;
    }

    [HttpGet("staff")]
    public IEnumerable<Staff> GetStaff()
    {
      using var connection = new MySqlConnection(maxDb);
      var data = connection.GetAll<Staff>();
      return data;
    }

    [HttpGet("device/{id}")]
    public Device GetDevice(int id)
    {
      using var connection = new MySqlConnection(maxDb);
      var data = connection.Get<Device>(id);
      return data;
    }

    [HttpPost("add")]
    public void Add([FromBody] Device device)
    {
      using var connection = new MySqlConnection(maxDb);
      connection.Insert(device);
    }

    [HttpPost("addhistory")]
    public void AddHistory([FromBody] History history)
    {
      using var connection = new MySqlConnection(maxDb);
      connection.Insert(history);
    }

    [HttpDelete("delete")]
    public void Delete([FromBody] Device device)
    {
      using var connection = new MySqlConnection(maxDb);
      connection.Delete(device);
    }

    [HttpPut("put")]
    public void Put([FromBody] Device device)
    {
      using var connection = new MySqlConnection(maxDb);
      connection.Update(device);
    }
  }
}
