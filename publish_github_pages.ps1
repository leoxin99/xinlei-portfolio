$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$RemoteUrl = "https://github.com/leoxin99/xinlei-portfolio.git"

Write-Host "Checking local repository..."
git -C $RepoRoot status --short

Write-Host "Ensuring origin remote is configured..."
$existingOrigin = git -C $RepoRoot remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
  git -C $RepoRoot remote add origin $RemoteUrl
} elseif ($existingOrigin -ne $RemoteUrl) {
  git -C $RepoRoot remote set-url origin $RemoteUrl
}

Write-Host "Pushing main to GitHub..."
git -C $RepoRoot push -u origin main

Write-Host ""
Write-Host "Next: open GitHub Settings -> Pages, choose Deploy from branch, main, /root."
Write-Host "Public URL will be: https://leoxin99.github.io/xinlei-portfolio/"
