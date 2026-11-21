/* Calendar helpers shared by the page and its tests. No external dependencies. */
(function(root){
 'use strict';
 const SCHOOL_START='2026-11-01', SCHOOL_END='2027-04-30';
 function parseDate(value){if(!/^\d{4}-\d{2}-\d{2}$/.test(value))throw new Error('Choose a valid date.');const d=new Date(value+'T12:00:00Z');if(!Number.isFinite(d.getTime())||d.toISOString().slice(0,10)!==value)throw new Error('Choose a valid date.');return d;}
 function inSchoolYear(value){parseDate(value);return value>=SCHOOL_START&&value<=SCHOOL_END;}
 function nextDate(value){const d=parseDate(value);d.setUTCDate(d.getUTCDate()+1);return d.toISOString().slice(0,10);}
 function escapeICS(value){return String(value).replace(/\\/g,'\\\\').replace(/\r\n|\r|\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');}
 function foldLine(value){const enc=new TextEncoder();let result='',line='',length=0;for(const char of value){const bytes=enc.encode(char).length;if(length+bytes>75){result+=line+'\r\n';line=' ';length=1;}line+=char;length+=bytes;}return result+line;}
 function buildICS(events,now=new Date()) {if(!events.length)throw new Error('Save a date first.');const stamp=now.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z');const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//The Power of Giving//Family Adventure//EN','CALSCALE:GREGORIAN'];for(const event of events){parseDate(event.date);if(!event.title.trim())throw new Error('Give your date a title.');if(!/^[a-zA-Z0-9@._-]+$/.test(event.id))throw new Error('Invalid event ID.');lines.push('BEGIN:VEVENT','UID:'+event.id+'@power-of-giving','DTSTAMP:'+stamp,'DTSTART;VALUE=DATE:'+event.date.replace(/-/g,''),'DTEND;VALUE=DATE:'+nextDate(event.date).replace(/-/g,''),'SUMMARY:'+escapeICS(event.title),'DESCRIPTION:'+escapeICS(event.note||''),'TRANSP:TRANSPARENT','END:VEVENT');}lines.push('END:VCALENDAR');return lines.map(foldLine).join('\r\n')+'\r\n';}
 const OPEN_HOUSE={id:'school-open-house-20270416',date:'2027-04-16',title:'Community Volunteerism Open House',note:'The Power of Giving — 2026–2027 school year. During the school day; exact time to be confirmed by school. Children share their volunteering experience with the school community. Families are encouraged to invite representatives from their organisations. Saved as a date-only calendar entry, not a full-day activity.'};
 const api={SCHOOL_START,SCHOOL_END,parseDate,inSchoolYear,nextDate,escapeICS,foldLine,buildICS,OPEN_HOUSE};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GivingCalendar=api;
})(typeof globalThis!=='undefined'?globalThis:this);
