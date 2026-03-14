$desktop = [Environment]::GetFolderPath('Desktop')
$lnkPath = Join-Path $desktop "Clinica.lnk"

$ws = New-Object -ComObject WScript.Shell
$shortcut = $ws.CreateShortcut($lnkPath)
$shortcut.TargetPath = "C:\Windows\System32\wscript.exe"
$shortcut.Arguments = '"C:\PROJETOS\clinica\iniciar.vbs"'
$shortcut.WorkingDirectory = "C:\PROJETOS\clinica"
$shortcut.IconLocation = "C:\PROJETOS\clinica\public\icons\clinica.ico,0"
$shortcut.Description = "aime Reabilitacao Fonoaudiologica"
$shortcut.WindowStyle = 1
$shortcut.Save()

Write-Host "Atalho criado em: $lnkPath"
