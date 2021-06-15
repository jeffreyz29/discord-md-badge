<h1 style="text-align: center">Discord Profile Markdown badge</h1>

Add to your GitHub readme a badge that shows your Discord username and presence!

![](https://discord-md-badge.vercel.app/api/shield/406125028065804289)

### Set up

1. Join the [Discord server](https://discord.gg/zkspfFwqDg) (required, as that's where the bot gets your presence information from)
2. Add to your readme

   `![](https://discord-md-badge.vercel.app/api/shield/USERID)`

   replacing `USERID` with [your Discord user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) (e.g. `![](https://discord-md-badge.vercel.app/api/shield/406125028065804289)`)

Done! (Make sure not to leave the server, or this will break)

### Styling

This uses [shields.io](https://shields.io) to generate the badge, so you can choose one of the styles from there by appending `?style=` to the url.

| Badge                                                                                               | Style         | Query                |
| :-------------------------------------------------------------------------------------------------- | :------------ | :------------------- |
| ![flat](https://discord-md-badge.vercel.app/api/shield/406125028065804289?style=flat)               | flat          | `?style=flat`        |
| ![flat-square](https://discord-md-badge.vercel.app/api/shield/406125028065804289?style=flat-square) | flat-square   | `?style=flat-square` |
| ![for-the-badge (default)](https://discord-md-badge.vercel.app/api/shield/406125028065804289)       | for-the-badge | None (default)       |
| ![plastic](https://discord-md-badge.vercel.app/api/shield/406125028065804289?style=plastic)         | plastic       | `?style=plastic`     |
| ![social](https://discord-md-badge.vercel.app/api/shield/406125028065804289?style=social)           | social        | `?style=social`      |

### Endpoints

(Preceded by `https://discord-md-badge.vercel.app/api`)

| Endpoint              | Description                                       | Example response                                                                          |
| :-------------------- | :------------------------------------------------ | :---------------------------------------------------------------------------------------- |
| `/shield/USERID`      | returns a shield in the SVG format                | ![](https://discord-md-badge.vercel.app/api/shield/406125028065804289?style=flat)     |
| `/shield/png/USERID`  | returns a shield in the PNG format                | ![](https://discord-md-badge.vercel.app/api/shield/png/406125028065804289?style=flat) |
| `/shield/json/USERID` | returns the raw JSON used to generate the shields | `{ "t": "Monty#3581", "p": "online" }`                                                    |
