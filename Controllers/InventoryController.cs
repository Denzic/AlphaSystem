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
    private static readonly string[] Summaries = new[]
    {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

    private readonly ILogger<InventoryController> _logger;
    private readonly IConfiguration _config;
    private readonly string connectionString = "Server=localhost;Database=school;Uid=root;Password=op930917;";
    private readonly string maxDb = "Server=localhost;Database=max_devices;Uid=root;Password=op930917;";

    public InventoryController(ILogger<InventoryController> logger, IConfiguration config)
    {
      _logger = logger;
      _config = config;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
      var rng = new Random();
      return Enumerable.Range(1, 5).Select(index => new WeatherForecast
      {
        Date = DateTime.Now.AddDays(index),
        TemperatureC = rng.Next(-20, 55),
        Summary = Summaries[rng.Next(Summaries.Length)]
      })
      .ToArray();
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
    public void Delete([FromBody] Student student)
    {
      using var connection = new MySqlConnection(connectionString);
      connection.Delete(student);
    }

    [HttpPut("put")]
    public void Put([FromBody] Device device)
    {
      using var connection = new MySqlConnection(maxDb);
      connection.Update(device);
    }

  }
}
