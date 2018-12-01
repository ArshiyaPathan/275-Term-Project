package com.backend.netflix.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.netflix.vo.Billing;
import com.backend.netflix.vo.PaidStatus;
import com.backend.netflix.vo.User;
import com.backend.netflix.repository.UserActivityRepository;
import com.backend.netflix.repository.BillingRepository;
import com.backend.netflix.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class ReportService {


	@Autowired
	private UserActivityRepository UserActivityRepository;

	@Autowired
	private BillingRepository billingStatusRepository;

	@Autowired
	private UserRepository userRepository;

	//	public String getStat(int uid) {
	//		// TODO Auto-generated method stub
	//		
	//		
	//		return billingStatus.getPstatus().toString();
	//	}
	public Billing findByUserId(int userId) {
		return billingStatusRepository.findByUserId(userId);
	}



	public List<User> getAllUniqueSubscriptionUsers( PaidStatus PaidStatus) {
		// TODO Auto-generated method stub
		List<User> allSubscribedUsers=new ArrayList<>();
		List<Integer> UniqueBillUserids=billingStatusRepository.findBilling(PaidStatus);
		Set<User> allSubsribedUserUnique= new HashSet<User>();
		for(int userIds:UniqueBillUserids) {
			allSubsribedUserUnique.add((User) userRepository.findById(userIds));
		}
		allSubscribedUsers.addAll(allSubsribedUserUnique);
		return allSubscribedUsers ;
	}



	public List<User> getAllUniqueActiveusers() {
		List<User> UniqueActiveusers=new ArrayList<>();
		List<Integer> UniqueactiveUserids=UserActivityRepository.getUniqueActiveusers();
		Set<User> allSubsribedUserUnique= new HashSet<User>();
		for(int userIds:UniqueactiveUserids) {
			allSubsribedUserUnique.add((User) userRepository.findById(userIds));
		}
		UniqueActiveusers.addAll(allSubsribedUserUnique);
		return UniqueActiveusers ;
		// TODO Auto-generated method stub

	}



	public int getIncomeBasedonSubscription(PaidStatus paidStatus) {
		//		https://stackoverflow.com/questions/7182996/java-get-month-integer-from-date  refer this
		//creating instances of java.util.Date which represents today's date and time
		java.util.Date now = new java.util.Date();
		now.getMonth();
		// TODO Auto-generated method stub
		return 0;
	}



	public int getTotalIncome() {
		//		https://stackoverflow.com/questions/7182996/java-get-month-integer-from-date  refer this
		//creating instances of java.util.Date which represents today's date and time

		int genralSubscriptionIncome=getIncomeBasedonSubscription(PaidStatus.general);
		int perMovieSubscriptionIncome=getIncomeBasedonSubscription(PaidStatus.perMovie);

		// TODO Auto-generated method stub
		return genralSubscriptionIncome+perMovieSubscriptionIncome;
	}



	public HashMap<Integer, List<User>> getMonthbyMonthRegisteresUsers() {
		// TODO Auto-generated method stub
		return null;
	}









}
