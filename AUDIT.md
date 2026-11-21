# The Power of Giving — flyer audit

Reviewed against the supplied scans of **The Power of Giving 1.pdf** and **The Power of Giving 2.pdf**, on 21 November 2026. This is an implementation audit, not school approval.

## Objective and content coverage

| Flyer requirement | Website implementation | Result |
|---|---|---|
| Authentic, family-led volunteering; empathy, initiative, responsibility, reflection, wider-community contribution | Family mission section; parent support field; useful-action confirmation | Included |
| Cosmic Education, Practical Life, Grace and Courtesy | Three Montessori explanations | Included |
| Path A: research 3–5 Valencia organisations, contact, realistic commitment/schedule, action, documentation, sustain/reflection | First-time path and planner | Included |
| Path B: same organisation, new organisation/cause, or sustained initiative for a real need | Returning path; presented as choices | Included |
| Identify a need and 2–3 actions; compare pros, cons, feasibility and risks; confirm useful; choose one realistic child-led project with family support | Improvement instructions; options, action, support and confirmation fields | Included |
| Story-based documentation, not just activity listing | Scrapbook instructions | Included |
| Photo journal with captions, student journal, video with reflection, appropriate physical artefacts | Four documentation formats | Included |
| Five opportunity questions | All five retained | Included |
| Social/humanitarian, environmental, cultural/educational areas | Mission choices and area descriptions | Included |
| Four Valencia search routes | Council platform; community networks; charities including Red Cross and Cáritas; relevant organisations | Included as research routes, not claims of available placements |
| Six final presentation topics | All six interactive checklist items | Included |
| Returning pupils connect with last year | Explicit reminder | Included |
| Six possible forms of contribution | Expandable contribution ideas, all six retained | Included |

## Entire project schedule

| School window | Required action | Website |
|---|---|---|
| November 2026 | Research 3–5 organisations and select; returning families reflect | Map stop and November calendar |
| Early December 2026 | Contact, agree commitment/schedule, choose documentation | Map stop and December calendar |
| December 2026–January 2027 | Begin, participate consistently, document | Map stop and both month descriptions |
| January–February 2027 | Sustain, reflect, consider impact | Map stop and both month descriptions |
| March 2027 | Complete volunteering, organise photos/reflections, prepare visuals | Map stop and March calendar |
| Early April 2027 | Finish poster/visuals and practise student presentation | Map stop and April calendar |
| Friday 16 April 2027 | Community Volunteerism Open House; invite organisation representatives | Highlighted date, event description, .ics export |

The parent confirmed that the project begins in the 2026 school period. The site therefore uses the 2026–2027 school year; 16 April 2027 is Friday. The parent said the event is during school time. No exact time is supplied, so calendar files use date-only entries. Date-only does not mean the activity lasts all day. Month-based stages remain windows, not invented exact deadlines. User-selected family dates are explicitly distinguished from school deadlines.

## Website additions and limits

- Animated welcome, Sunny, Earth, heart, sprout and stars are presentation aids.
- Planning stars are not grades or evidence of real-world service.
- English and Spanish UI translations preserve the school instructions. User-entered text is never automatically translated.
- Notes, checklist, path, dates and preferences are local to the browser; there is no account, analytics, network sync or submission to school.
- JSON backup and restore keep all supported project data; HTML/TXT reports are readable exports; ICS files import into calendar applications.
- Offline kit is blank and self-contained. It does not silently copy private notes from an online browser. Export a JSON backup and restore it in the offline page to transfer work.
- Original flyers are included unchanged for reference.

## Verification

See TESTING.md for checks performed and limits. Automated calendar and backup tests run with `node --test tests/calendar.test.cjs`. Test inputs are synthetic and are not included as family data in the distributable kit.
