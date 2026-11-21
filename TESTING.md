# Verification record

21 November 2026. Synthetic test data was used; it is not embedded in the offline kit.

## Automated checks passed

`node --test tests/calendar.test.cjs` — 6 tests:
- Friday 16 April 2027; date-only start and exclusive 17 April end.
- Year/month rollover, leap years and rejection of impossible dates.
- Calendar text escaping, newline injection protection and UTF-8 line folding to 75 bytes.
- Multiple calendar entries with independent IDs and dates.
- JSON round-trip for notes, dates, checklist, language and motion settings.
- Rejection of invalid schema, future backup versions, duplicate event IDs, impossible dates and invalid setting types.

JavaScript syntax checks pass for all four scripts. The offline HTML embeds all scripts/styles and does not depend on network assets. The ZIP builder checks archive integrity.

## Browser checks

- Welcome dialog appears, its start button enters the site, and replay is available.
- Sunny responds and the animation toggle changes motion mode.
- All seven map stages select their matching calendar month.
- April 16 opens the school-event date form.
- Family dates save and persist after reload; the open-house ICS download completes.
- English/Spanish switching changes welcome text, headings, month labels and placeholders; user-entered Spanish text survives switching back to English unchanged.
- JSON backup downloads, re-imports and restores an edited field, checklist state and saved dates.
- HTML report downloads.
- Mobile preview at 390 px: welcome and bilingual page render without horizontal overflow.
- Static internal anchors and local asset links resolve; no duplicate HTML IDs.
- Self-contained offline HTML runs its welcome, Spanish switch and all seven stages when served for inspection; it contains no external script or stylesheet references. Direct file:// navigation is not available in this test browser.

## Limits

No third-party calendar account is modified by this site. ICS import behaviour inside Apple Calendar, Google Calendar and Outlook is not end-to-end tested here. Opening local HTML uses each browser's file-storage rules; JSON backups are the durable transfer mechanism. There is no server sync or autosave directly into arbitrary folders. GitHub repository creation/Pages deployment are separate hosting tasks, not implied by these checks.
