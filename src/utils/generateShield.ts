import "dotenv/config";

export default async function generateShield(p: {
  style: string;
  label: string;
  message: string;
  theme?: string;
  logoColor?: string;
  compact?: boolean;
}) {
  const username = p.label;
  const presence = p.message;

  const o = {
    logo: "discord",
    style: p.style || "for-the-badge",
    color: "555",
    labelColor: "5865f2",
    logoColor: p.style === "social" ? "5865F2" : "white",
    label: username,
    message: presence,
  };

  const presenceColors = {
    online: "3ba55d",
    idle: "faa81a",
    "do not disturb": "ed4245",
    offline: "555",
  };

  // fall back to the online green (useful for servers)
  const presenceColor = presenceColors?.[presence] || presenceColors.online;

  switch (p.theme) {
    case "blurple": {
      o.color = "5865F2";
      o.labelColor = "5865F2";
      break;
    }
    case "gray":
    case "grey": {
      o.color = "555";
      o.labelColor = "555";
      break;
    }
    case "full-presence": {
      o.color = presenceColor;
      o.labelColor = presenceColor;
      break;
    }
    case "discord-inverted": {
      o.color = presenceColor;
      o.labelColor = "5865F2";
      break;
    }
    case "discord": {
      o.color = "5865F2";
      o.labelColor = presenceColor;
      break;
    }
    case "clean-inverted": {
      o.color = presenceColor;
      o.labelColor = "555";
      break;
    }
    case "clean": {
      o.color = "555";
      o.labelColor = presenceColor;
      break;
    }
    case "default-inverted": {
      o.color = "5865F2";
      o.labelColor = "555";
      break;
    }
  }

  if (p.logoColor === "presence") {
    o.logoColor = presenceColor;
  } else if (p.logoColor) {
    o.logoColor = p.logoColor;
  }

  if (p.compact) {
    o.label = "";
    o.message = username;
  }

  const query = new URLSearchParams(o).toString();

  const shieldFetch = await fetch(
    `${process.env.SHIELDS_IO_INSTANCE}/static/v1?${query}`,
  );
  let shield = await shieldFetch.text();

  shield = shield.replaceAll(username.toUpperCase(), username);
  if (o.style === "for-the-badge") {
    shield = shield
      .replaceAll('font-weight="bold"', "")
      .replaceAll("<text ", "<text font-weight='bold' ");
  } else if (o.style === "social") {
    shield = shield.replaceAll(
      `${username[0].toUpperCase()}${username.slice(1)}`,
      username,
    );
  }

  return shield;
}
