using CliFx.Attributes;
using CliFx.Infrastructure;
using Husky.Services.Contracts;
using Husky.Stdout;
using Husky.Utils;

namespace Husky.Cli;

[Command("add", Description = "Add husky hook (add pre-commit -c \"echo husky.net is awesome\")")]
public class AddCommand : CommandBase
{
   private readonly IGit _git;
   private readonly ICliWrap _cliWrap;

   [CommandParameter(0, Name = "hook-name", Description = "Hook name (pre-commit, commit-msg, pre-push, etc.)")]
   public string HookName { get; set; } = default!;

   [CommandOption("command", 'c', Description = "command to run")]
   public string Command { get; set; } = "dotnet husky run";

   public AddCommand(IGit git, ICliWrap cliWrap)
   {
      _git = git;
      _cliWrap = cliWrap;
   }

   protected override async ValueTask SafeExecuteAsync(IConsole console)
   {
      var setCommand = new SetCommand(_git, _cliWrap) { HookName = HookName, Command = Command };
      var huskyPath = await setCommand.GetHuskyPath();
      var hookPath = Path.Combine(huskyPath, HookName);

      // Set if not exists
      if (!File.Exists(hookPath))
      {
         await setCommand.ExecuteAsync(console);
         return;
      }

      await File.AppendAllTextAsync(hookPath, $"{Command}\n");
      $"added to '{hookPath}' hook".Log(ConsoleColor.Green);
   }
}
