# 🏦 We Masau Loan Application Portal

A web-based loan application management system for the We Masau Loan Committee. Members can submit loan applications, and committee members can review, vote, and manage approvals — all in real time.

## 🌐 Live Demo

**[https://wemasau-dev.github.io/Loans-Portal/](https://wemasau-dev.github.io/Loans-Portal/)**

---

## ✨ Features

### For Applicants
- 📝 Submit loan applications with full details (amount, term, purpose, guarantors, etc.)
- 📧 Receive email confirmations on submission and decision
- 🆔 Unique application ID for tracking

### For Committee Members
- 🔐 Secure login with username and PIN
- 📋 Dashboard with pending and historical applications
- 🗳️ Vote on applications (Approve / Reject / Pending Review)
- 📝 Treasurer can add comments on applications
- 🔍 Search by name, application ID, or member ID
- 📅 Filter history by month
- 📄 Pagination for easy browsing
- 🔽 Expandable cards for compact viewing
- 📧 Email notifications (To: Chair, CC: Overall Chair, BCC: Members)

### Voting System
- 3 approvals = **Approved**
- 3 rejections = **Rejected**
- Otherwise = **Pending**
- Applicants are automatically notified of the decision

---

## 🏗️ Architecture


---

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| **Frontend** | HTML, CSS, JavaScript (GitHub Pages) |
| **CORS Proxy** | Cloudflare Workers |
| **Backend** | Google Apps Script |
| **Database** | Google Sheets (via Sheety API) |
| **Emails** | EmailJS |
| **Hosting** | GitHub Pages + Cloudflare Workers |

---

## 👥 Committee Members

| Name | Role | Username |
|---|---|---|
| Joseph Mononga | Committee Chair | `joseph` |
| Harry Mononga | Overall Chair | `harry` |
| Amos Tizora | Patron | `amos` |
| Emmanuel Kusunzi | Operations | `emmanuel` |
| Levie Sezza | Member | `levie` |
| Chifundo Lodzeni | Member | `chifundo` |
| Marvin Masangwi | Treasurer | `marvin` |

---

## 📧 Email Flow

| Event | Recipient | Template |
|---|---|---|
| Application submitted | Applicant (To) | Applicant Template |
| Application submitted | Committee Chair (To), Overall Chair (CC), Members (BCC) | Committee Template |
| Application approved | Applicant (To) | Applicant Template |
| Application rejected | Applicant (To) | Applicant Template |

---

## 📊 Google Sheet Columns

| Column | Description |
|---|---|
| timestamp | Submission timestamp |
| applicationId | Unique ID (e.g., WM-XXXX) |
| fullName | Applicant full name |
| memberId | Member ID |
| email | Applicant email |
| phone | Phone number |
| joinDate | Membership join date |
| membershipStatus | Membership status |
| loanType | Type of loan |
| loanAmount | Loan amount (MWK) |
| loanTerm | Repayment term (months) |
| repaymentMethod | Repayment method |
| preferredDisbursementDate | Preferred disbursement date |
| purpose | Loan purpose |
| monthlyIncome | Monthly income |
| monthlyExpenses | Monthly expenses |
| employmentStatus | Employment status |
| employer | Employer name |
| yearsEmployed | Years employed |
| existingLoans | Existing loans |
| existingBalance | Existing balance |
| guarantor1Name | First guarantor name |
| guarantor1Phone | First guarantor phone |
| guarantor2Name | Second guarantor name |
| guarantor2Phone | Second guarantor phone |
| approvalStatus | Pending / Approved / Rejected |
| votes | JSON array of votes |
| approveCount | Number of approvals |
| rejectCount | Number of rejections |
| pendingCount | Number of pending reviews |
| lastVoteBy | Last voter name |
| lastVoteDate | Last vote timestamp |
| treasurerComment | Treasurer's comment (optional) |

---

## 🔧 Configuration

### Cloudflare Worker
- **Worker Name:** `cors-proxy1`
- **URL:** `https://cors-proxy1.wemasau1.workers.dev`
- **Function:** Forwards POST requests to Google Apps Script and handles CORS headers

### Google Apps Script
- **Actions supported:** `login`, `submitApplication`, `getApplications`, `castVote`, `addTreasurerComment`
- **Deployed as:** Web app (Execute as Me, Access: Anyone)

### EmailJS
- **Service:** Gmail
- **Templates:** 2 (Applicant + Committee)
- **BCC:** Used for committee member notifications

---

## 📁 Repository Structure


---

## 📝 License

© 2026 We Masau Loan Committee. All rights reserved.
