using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Fable.Models;
using Microsoft.Extensions.Configuration;
using MySql.EntityFrameworkCore.Extensions;
using System.Configuration;

public class AccountController : Controller
{
    private readonly SQLDbContext _context;
    private readonly IConfiguration _configuration;

    public AccountController(SQLDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    public IActionResult Index1()
    {
        return View();
    }

    [HttpGet]
    public IActionResult Register()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Register(Login login)
    {
        if (ModelState.IsValid)
        {
            _context.Logins.Add(login);
            _context.SaveChanges();
            return RedirectToAction("Login");
        }
        return View(login);
    }

    [HttpGet]
    public IActionResult Login()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Login(Login login)
    {
        var dbLogin = _context.Logins.FirstOrDefault(u => u.Username == login.Username && u.Password == login.Password);
        if (dbLogin != null)
        {
            HttpContext.Session.SetString("Username", dbLogin.Username);
            return RedirectToAction("Index2");
        }
        ModelState.AddModelError("", "Invalid username or password");
        return View(login);
    }

    public IActionResult Logout()
    {
        HttpContext.Session.Remove("Username");
        return RedirectToAction("Index1");
    }
}
