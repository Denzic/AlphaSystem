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
  public class WeatherForecastController : ControllerBase
  {
    private static readonly string[] Summaries = new[]
    {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

    private readonly ILogger<WeatherForecastController> _logger;
    private readonly IConfiguration _config;
    private readonly string connectionString = "Server=localhost;Database=school;Uid=root;Password=op930917;";

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IConfiguration config)
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

    [HttpGet("crews")]
    public IEnumerable<Student> GetCrews()
    {
      using var connection = new MySqlConnection(connectionString);
      var data = connection.GetAll<Student>();
      return data;
    }

    [HttpGet("crews/{id}")]
    public Student GetCrew(int id)
    {
      using var connection = new MySqlConnection(connectionString);
      var data = connection.Get<Student>(id);
      return data;
    }

    [HttpPost("post")]
    public void Post([FromBody] Student student)
    {
      using var connection = new MySqlConnection(connectionString);
      connection.Insert(student);
    }

    [HttpDelete("delete")]
    public void Delete([FromBody] Student student)
    {
      using var connection = new MySqlConnection(connectionString);
      connection.Delete(student);
      //connection.Execute("DELETE FROM student WHERE id = @Sid", new { Sid = student.Id });
    }

    [HttpPut("update")]
    public void Put([FromBody] Student student)
    {
      using var connection = new MySqlConnection(connectionString);
      var newStudent = connection.Get<Student>(student.Id);

      connection.Update(student);
    }
  }
}
