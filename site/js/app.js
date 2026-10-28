// Author Marketing Basics Guide — client-only template forms
// Nothing is sent to a server. All data stays in the browser.

(function () {
  'use strict';

  function bindForm(formId, resultId, buildFn) {
    var form = document.getElementById(formId);
    var result = document.getElementById(resultId);
    var btn = form && form.querySelector('.btn-copy');
    if (!form || !result || !btn) return;

    function render() {
      result.textContent = buildFn(form);
      result.style.display = 'block';
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(function () {
        btn.textContent = 'Copy to clipboard';
        btn.classList.remove('copied');
      }, 1500);
    }

    form.addEventListener('input', render);
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var text = result.textContent;
      if (!text) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        var area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.left = '-9999px';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
      }
      render();
    });

    render();
  }

  function val(form, name) {
    var el = form.elements[name];
    return el ? el.value.trim() : '';
  }

  // Author bio form
  bindForm('bio-form', 'bio-result', function (f) {
    var name = val(f, 'name') || '[Author Name]';
    var profession = val(f, 'profession') || '[profession]';
    var book = val(f, 'book') || '[Book Title]';
    var topic = val(f, 'topic') || '[topic]';
    var link = val(f, 'link') || '[book link]';
    var location = val(f, 'location') || '[general location]';
    var email = val(f, 'email') || '[dedicated author email]';
    var pronoun = val(f, 'pronoun') || 'they';
    var verb = pronoun === 'they' ? 'write' : 'writes';
    var poss = pronoun === 'they' ? 'their' : 'his or her';

    return [
      'SHORT BIO',
      '-------------',
      name + ' is a ' + profession + ' turned AI author and founder of Asdale Dynamics, LLC in Indiana. ' + (pronoun.charAt(0).toUpperCase() + pronoun.slice(1)) + ' ' + verb + ' beginner-friendly guides that explain AI "like a friend would": plain English, step by step, never condescending.',
      '',
      'MEDIUM BIO',
      '----------',
      name + ' is a ' + profession + ' turned AI author and founder of Asdale Dynamics, LLC (Indiana, formed October 2026). ' + (pronoun.charAt(0).toUpperCase() + pronoun.slice(1)) + ' ' + verb + ' ' + poss + ' guides step by step so beginners can follow without a technical background.',
      '',
      name + ' is the author of *[' + book + ']*(' + link + '), which teaches ' + topic + ' step by step.',
      '',
      'Learn more at https://dylanasdale.github.io',
      '',
      'LONG BIO',
      '--------',
      name + ' is a ' + profession + ' turned AI author, educator, and founder of Asdale Dynamics, LLC, an Indiana company focused on beginner-friendly AI education, books and guides, and practical tools.',
      '',
      name + ' is the author of *[' + book + ']*(' + link + '), a step-by-step guide to ' + topic + '.',
      '',
      name + ' lives in ' + location + '. Contact: ' + email
    ].join('\n');
  });

  // Press release form
  bindForm('pr-form', 'pr-result', function (f) {
    var date = val(f, 'date') || '[Date]';
    var book = val(f, 'book') || '[Book Title]';
    var author = val(f, 'author') || '[Author Name]';
    var profession = val(f, 'profession') || '[profession]';
    var audience = val(f, 'audience') || '[audience]';
    var topic = val(f, 'topic') || '[topic]';
    var city = val(f, 'city') || '[City]';
    var quote = val(f, 'quote') || '"[Quote from the author]"';
    var amazon = val(f, 'amazon') || '[Amazon book link]';
    var email = val(f, 'email') || '[dedicated author email]';
    var location = val(f, 'location') || '[general location]';

    return [
      'FOR IMMEDIATE RELEASE',
      date,
      '',
      book + ' by ' + author + ' Helps ' + audience + ' Learn ' + topic + ' Step by Step',
      '',
      city + ', Indiana — ' + author + ', a ' + profession + ' turned AI author and founder of Asdale Dynamics, LLC, announces the release of *[' + book + ']*, a beginner-friendly guide to ' + topic + ', available now on Amazon Kindle Direct Publishing.',
      '',
      book + ' teaches ' + topic + ' step by step, in plain English, with no technical background required.',
      '',
      quote + ', said ' + author + '.',
      '',
      'The book is available in paperback and ebook through Amazon KDP at ' + amazon + '. ' + author + ' is available for interviews, library talks, and local events. Contact: ' + email + '.',
      '',
      'About Asdale Dynamics, LLC:',
      'Asdale Dynamics, LLC (Indiana, formed October 2026) publishes beginner-friendly AI education, books and guides, and practical tools. Focus areas include AI education, agents and MCP, local AI, free AI coding, GitHub, automation, small-business and author tools, accessible life-admin helpers, and healthcare-worker AI aids (education only, never medical advice). Learn more at https://dylanasdale.github.io',
      '',
      '###',
      '',
      author,
      email,
      location,
      book + ': ' + amazon
    ].join('\n');
  });

  // Social posts form
  bindForm('social-form', 'social-result', function (f) {
    var book = val(f, 'book') || '[Book Title]';
    var link = val(f, 'link') || '[Amazon link]';
    var topic = val(f, 'topic') || '[topic]';
    var author = val(f, 'author') || '[Author Name]';
    var reader = val(f, 'reader') || '[reader first name, last initial]';

    return [
      'POST 1 — LAUNCH ANNOUNCEMENT',
      '-----------------------------',
      'Big news: my book *[' + book + ']*(' + link + ') is out now.',
      '',
      'It is a beginner-friendly guide to ' + topic + ', written "like a friend would": plain English, step by step, never condescending. No tech background needed.',
      '',
      'Get it here: ' + link,
      '',
      'Published by Asdale Dynamics, LLC (Indiana).',
      '',
      '',
      'POST 2 — ORIGIN STORY',
      '---------------------',
      'I wrote *[' + book + ']*(' + link + ') because I could not find a guide that explained ' + topic + ' without jargon. So I wrote one myself.',
      '',
      'If you have ever felt left behind by AI, this book is for you.',
      '',
      link,
      '',
      'Asdale Dynamics, LLC — beginner-friendly AI education, books, and guides.',
      '',
      '',
      'POST 4 — EARLY FEEDBACK',
      '---------------------',
      '"This book finally made ' + topic + ' make sense to me." — ' + reader + ', early reader',
      '',
      'Thank you to everyone who read an advance copy. *[' + book + ']*(' + link + ') is now available.',
      '',
      link,
      '',
      'Asdale Dynamics, LLC (Indiana).',
      '',
      '',
      'POST 5 — WHERE TO GET IT',
      '------------------------',
      '*[' + book + ']*(' + link + ') is available now in paperback and ebook through Amazon Kindle Direct Publishing.',
      '',
      link,
      '',
      'Beginner-friendly AI education from Asdale Dynamics, LLC (Indiana).',
      '',
      '',
      'POST 7 — THANK YOU',
      '------------------',
      'Thank you to everyone who bought, borrowed, or shared *[' + book + ']*(' + link + '). Your reviews and recommendations mean more than any ad budget could buy.',
      '',
      'What would you like to see covered next? Reply with your topic.',
      '',
      '— ' + author,
      '',
      'Asdale Dynamics, LLC (Indiana).'
    ].join('\n');
  });

  // Newsletter form
  bindForm('newsletter-form', 'newsletter-result', function (f) {
    var book = val(f, 'book') || '[Book Title]';
    var link = val(f, 'link') || '[book link]';
    var author = val(f, 'author') || '[Author Name]';
    var frequency = val(f, 'frequency') || 'month';
    var resource = val(f, 'resource') || '[free resource]';
    var resourceLink = val(f, 'resourceLink') || '[resource link]';
    var email = val(f, 'email') || '[dedicated author email]';
    var location = val(f, 'location') || '[general location]';

    return [
      'Subject: Welcome to the *[' + book + ']* newsletter',
      '',
      'Hi [First Name],',
      '',
      'Thanks for signing up. I am ' + author + ', author of *[' + book + ']*(' + link + ') and founder of Asdale Dynamics, LLC in Indiana.',
      '',
      'This newsletter is free and comes about once a ' + frequency + '. You will get:',
      '- New book and guide announcements',
      '- Free AI tools and tutorials',
      '- Links to local events and readings',
      '',
      'You can unsubscribe at any time — the link is at the bottom of every email.',
      '',
      'To start, here is ' + resource + ': ' + resourceLink,
      '',
      'Happy reading,',
      '',
      '— ' + author,
      'Asdale Dynamics, LLC (' + location + ')',
      email
    ].join('\n');
  });

  // ARC readers form
  bindForm('arc-form', 'arc-result', function (f) {
    var book = val(f, 'book') || '[Book Title]';
    var link = val(f, 'link') || '[book link]';
    var author = val(f, 'author') || '[Author Name]';
    var topic = val(f, 'topic') || '[topic]';
    var days = val(f, 'days') || '[number]';
    var email = val(f, 'email') || '[dedicated author email]';

    return [
      'Subject: ARC reader invitation — ' + book,
      '',
      'Hi [Name],',
      '',
      "I'm " + author + ", author of *[" + book + "](" + link + "), a beginner-friendly guide to " + topic + " being published by Asdale Dynamics, LLC (Indiana).",
      '',
      "I'm looking for a small group of ARC (advance reader) readers to read the book before launch and post honest reviews on release day. You would receive a free digital copy and my thanks in the book's acknowledgments (optional).",
      '',
      'No obligation to give a positive review — I only ask for an honest one.',
      '',
      'If you are interested, reply with your preferred format (PDF, EPUB, or Kindle) and I will send a copy. Please post your review within ' + days + ' days of launch.',
      '',
      'Thank you,',
      '',
      '— ' + author,
      email
    ].join('\n');
  });

  // Reviews form
  bindForm('reviews-form', 'reviews-result', function (f) {
    var book = val(f, 'book') || '[Book Title]';
    var link = val(f, 'link') || '[book link]';
    var topic = val(f, 'topic') || '[topic]';
    var amazon = val(f, 'amazon') || '[Amazon review link]';
    var goodreads = val(f, 'goodreads') || '[Goodreads link]';

    return [
      'Newsletter ask:',
      '----------------',
      'If you read *[' + book + ']*(' + link + ') and enjoyed it, a quick review on Amazon or Goodreads helps more than any ad budget I could buy. Even one or two sentences makes a difference. Thank you.',
      '',
      '',
      'Back matter ask:',
      '----------------',
      'Did this book help you? Please consider leaving a review on Amazon or Goodreads. It takes two minutes and helps other beginners find the book.',
      '',
      amazon + ' | ' + goodreads,
      '',
      '',
      'Pull quote (with permission):',
      '-----------------------------',
      '"' + book + ' explained ' + topic + ' in plain English, step by step. I went from knowing nothing to feeling confident."',
      '',
      '— [First name, last initial], reader'
    ].join('\n');
  });

  // Local events form
  bindForm('events-form', 'events-result', function (f) {
    var author = val(f, 'author') || '[Author Name]';
    var profession = val(f, 'profession') || '[profession]';
    var book = val(f, 'book') || '[Book Title]';
    var link = val(f, 'link') || '[book link]';
    var topic = val(f, 'topic') || '[topic]';
    var venue = val(f, 'venue') || '[Venue]';
    var coordinator = val(f, 'coordinator') || '[Coordinator name]';
    var eventType = val(f, 'eventType') || 'talk';
    var duration = val(f, 'duration') || '30–45 minutes';
    var dates = val(f, 'dates') || '[date 1], [date 2], or [date 3]';
    var email = val(f, 'email') || '[dedicated author email]';
    var location = val(f, 'location') || '[general location]';

    return [
      'Subject: Local author event: ' + book + ' at ' + venue,
      '',
      'Dear ' + coordinator + ',',
      '',
      "My name is " + author + ". I'm a " + profession + " turned AI author and founder of Asdale Dynamics, LLC (Indiana). I've written *[" + book + "](" + link + "), a beginner-friendly guide to " + topic + ".",
      '',
      "I'd like to host a free " + eventType + " at " + venue + ". The event would run about " + duration + ", include a short reading or demo, and end with Q&A. I bring my own materials and handle promotion through my newsletter and social accounts.",
      '',
      'Suggested dates: ' + dates + '.',
      '',
      'Would any of these work for you?',
      '',
      'Thank you,',
      '',
      '— ' + author,
      email,
      location,
      book + ': ' + link
    ].join('\n');
  });

  // Privacy checklist form (read-only text, copy button)
  bindForm('privacy-form', 'privacy-result', function (f) {
    return [
      'Privacy-Safe Marketing Checklist',
      '--------------------------------',
      '',
      'Personal data to keep offline:',
      '- Home address — use a general location (city/state) or PO box only',
      '- Personal phone number — use a dedicated author email instead',
      '- Personal email — use a dedicated author email address for all public contact',
      '- Workplace details that identify patients, coworkers, or your employer',
      '- Patient information of any kind',
      "- Family members' names or photos without permission",
      '- IDs, documents, or financial information',
      '',
      'Before you publish anything:',
      '- No street addresses — general location only',
      '- Contact is a dedicated author email address, not a personal one',
      '- No photos of people without permission; no faces or names in event photos without consent',
      '- Quotes from readers used only with permission (first name + last initial)',
      '- Newsletter sign-up collects email only; list stored locally, never published',
      '- ARC reader contact info stored locally, never published',
      '- All reviews honest and unpaid'
    ].join('\n');
  });
})();
