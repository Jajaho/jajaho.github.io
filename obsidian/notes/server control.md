
#### Server Control

```button
name 🔝 Start localhost
type command
action Shell commands: Execute: start localhost
```
```button
name 🔝 Start localhost (Drafts)
type command
action Shell commands: Execute: start localhost (with drafts)
```
```button
name 💻 Open localhost
type command
action Shell commands: Execute: open localhost
```

```button
name ☠️ Kill localhost
type command
action Shell commands: Execute: kill localhost
```

Not working yet:
```button
name 🛑 Stop localhost
type command
action Shell commands: Execute: stop localhost
```


#### Theme Switcher
`BUTTON[light-mode, dark-mode]`
```meta-bind-button
style: default
label: Light Mode
id: light-mode
hidden: true
actions:
  - type: command
    command: theme:use-light
```
```meta-bind-button
style: primary
label: Dark Mode
id: dark-mode
hidden: true
actions:
  - type: command
    command: theme:use-dark
```


## Documentation

[Shell commands Documentation](https://publish.obsidian.md/shellcommands/Index)


[meta-bind docs](https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/guides/buttons/)

meta-binds use of yaml prohibits the execution of Execute: hugo server because in yaml `: ` indicates a value declaration and is therefore a reserved keyword. Leading to this error message:

`YAMLParseError: Nested mappings are not allowed in compact mappings`