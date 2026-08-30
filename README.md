# Iris

The public marketing site for [Iris](https://applywithiris.com) — an automated job-application product that searches, applies, writes, and tracks so a job hunt can run from one place.

**Live:** [https://applywithiris.com](https://applywithiris.com)

The product itself lives at [https://app.applywithiris.com](https://app.applywithiris.com).

## What it is

Iris is a complete job-search stack. You fill in a profile once (CV, work history, preferences). From there Iris finds roles, fills application forms, drafts cover letters, and keeps status in one tracker — instead of bouncing between job boards, spreadsheets, and document folders.

There is also a [Chrome extension](https://chromewebstore.google.com/detail/iris/gkafmplebnbdnnbdafgfcnejfmaehhoj) for when you are already on an application page: it detects fields, drafts answers from your profile, and lets you review before you submit. It never hits send.

## The problem

Job hunting is repetitive and scattered. The same name, CV, and work history go into a slightly different form dozens of times a week. Tracking lives in a spreadsheet that goes stale. Every role wants a fresh cover letter. Boards, notes, and documents do not talk to each other, so the search itself becomes a second job.

## How it solves it

At a high level, Iris replaces that pile of tools with a single loop:

1. **Create an account** and fill an application profile once. That profile is the source of truth for every application.
2. **Find work inside Iris** or paste any job URL. Iris fills the forms and writes personalised cover letters from your CV and company context.
3. **Track everything** in one place — status updates instead of a spreadsheet you have to remember to maintain.

The Chrome extension covers the same profile on sites where you want to stay in the browser and submit yourself.

## Local development

```bash
pnpm install
pnpm dev
```
