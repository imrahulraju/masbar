# DNS + Microsoft 365 protection — misbar.qa
1. Coordinate every DNS change with the current domain administrator.
2. ADD ONLY: website A record (@ → host IP) and/or CNAME (www → host). Enable HTTPS/SSL at the host.
3. DO NOT touch: MX records, SPF (`v=spf1 ... include:spf.protection.outlook.com`), DKIM CNAMEs, DMARC (`_dmarc`) — verify with `dig MX misbar.qa`, `dig TXT misbar.qa` before and after.
4. After go-live: send + receive test emails, check SPF/DKIM/DMARC pass.
