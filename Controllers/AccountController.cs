using Fable.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;

namespace Fable.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<User> userManager;
        // USER
        private readonly SignInManager<User> signInManager;
        // private FableDB dbContext; TODO: Context for DB

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, FableDB dbContext)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.dbContext = dbContext;
        }
        // TODO: Implement Manager
        [AllowAnonymous]
        public IActionResult Register()
        {
            return View();
            // TODO: View for Register
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register(UserDTO userDTO)
        {

            if (userDTO.Password != userDTO.ConfirmPassword)
                // DTO
            {
                ViewBag.ErrorMessage = "Password is not confirmed!";
                return View();
            }

            User user = new User
            // USER
            {
                Email = userDTO.Email,
                UserName = userDTO.Username,
                FirstName = userDTO.FirstName,
                LastName = userDTO.LastName
            };

            IdentityResult result = await userManager.CreateAsync(user, userDTO.Password);

            if (result.Succeeded)
            {
                return RedirectToAction(nameof(Index), "Home");
            }

            //List<IdentityError> errors = new List<IdentityError>(result.Errors);
            //ViewData["errors"] = errors;

            return View();
        }


        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(UserDTO userDTO)
        {
            Microsoft.AspNetCore.Identity.SignInResult result = await signInManager.PasswordSignInAsync(userDTO.Username, userDTO.Password, false, false);

            if (result.Succeeded)
            {
                return RedirectToAction(nameof(Index), "Home");
            }

            ViewData["errorMessage"] = "Username or password is incorrect!";

            return View();
        }


        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction(nameof(Index), "Home");
        }

        public async Task<IActionResult> DetailsAsync()
        {
            User currentUser = await userManager.GetUserAsync(User);
            ViewBag.FirstName = currentUser.FirstName;
            ViewBag.LastName = currentUser.LastName;
            ViewBag.UserName = currentUser.UserName;
            ViewBag.UserEmail = currentUser.Email;

            return View(currentUser);
        }
        [HttpGet]
        public async Task<IActionResult> Edit()
        {
            User currentUser = await userManager.GetUserAsync(User);
            ViewBag.FirstName = currentUser.FirstName;
            ViewBag.LastName = currentUser.LastName;
            ViewBag.UserName = currentUser.UserName;
            ViewBag.UserEmail = currentUser.Email;
            return View(currentUser);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(string firstName, string lastName)
        {
            
        }

        [HttpGet]
        public async Task<IActionResult> Delete()
        {
            User currentUser = await userManager.GetUserAsync(User);
            ViewBag.FirstName = currentUser.FirstName;
            ViewBag.LastName = currentUser.LastName;
            ViewBag.UserName = currentUser.UserName;
            ViewBag.UserEmail = currentUser.Email;
            return View(currentUser);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteConfirm()
        {
            
        }

    }
}